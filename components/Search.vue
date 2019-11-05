<template>
  <div class="relative search-box">
    <div class="absolute left-0 search-icon ml-3 pointer-events-none text-gray-500">
      <Fa :icon="['fas', 'search']" />
    </div>
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="google(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
      ref="input"
      class="inline-block appearance-none bg-gray-100 border border-gray-200 leading-tight rounded-lg focus:outline-none hover:bg-white focus:bg-white py-2 pl-10 px-4 w-full xl:w-128"
    >
    <transition name="dropdown">
      <ul
        v-if="showSuggestions"
        @mouseleave="unfocus"
        class="navbar-dropdown absolute right-0 md:mt-8 z-20 bg-white rounded shadow-md p-2 w-full"
      >
        <li
          class="block"
          v-for="(s, i) in suggestions"
          :class="{ focused: i === focusIndex }"
          @mousedown="google(i)"
          @mouseenter="focus(i)"
        >
          <saber-link :to="s.permalink" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">
            <span class="page-title">{{ s.title || s.permalink }}</span>
            <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
          </saber-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Fuse from 'fuse.js';

export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      placeholder: undefined
    }
  },
  mounted () {
    this.placeholder = this.$themeConfig.search.placeholder || ''
    document.addEventListener('keydown', this.onHotkey)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.onHotkey)
  },
  computed: {
    showSuggestions () {
      return (
        this.focused
        && this.suggestions
        && this.suggestions.length
      )
    }
  },
  asyncComputed: {
    async suggestions() {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }
      let database = await this.$fetchSearchDatabase();

      const options = {
        keys: [
          {
            name: 'title',
            weight: 0.6
          },
          {
            name: 'excerpt',
            weight: 0.4
          }
        ],
        shouldSort: true
      }

      const fuse = new Fuse(database, options)
      let posts = fuse.search(query)

      const max = this.$themeConfig.search.maxSuggestions || 1
      let res = []
      for (let i = 0; i < posts.length; i++) {
        if (res.length >= max) break
        const p = posts[i]
        res.push(p)
      }
      return res
    }
  },
  methods: {
    onHotkey (event) {
      if (event.srcElement === document.body && this.$themeConfig.search.hotKeys.includes(event.which || event.key)) {
        this.$refs.input.focus()
        event.preventDefault()
      }
    },
    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },
    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },
    google (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].permalink)
      this.query = ''
      this.focusIndex = 0
    },
    focus (i) {
      this.focusIndex = i
    },
    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style scoped="">
  .search-icon {
    top: 6px;
  }
</style>