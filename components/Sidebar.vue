<template>
	<aside class="sidebar w-10/12 shadow-xl md:shadow-none fixed md:static top-0 bottom-0 z-10 bg-white md:w-1/4" :class="[ sidebar ? 'select' : '' ]">
		<div class="p-5 md:p-0 overflow-y-auto md:overflow-y-hidden">
			<div v-for="list in $themeConfig.sidebar" :key="list.title" class="mb-5">
				<p class="text-xl font-semibold text-black mb-1" v-if="list.title">{{ list.title }}</p>
				<ul class="ml-3">
					<li v-for="link in list.links" :key="link.title">
						<saber-link class="text-gray-600 hover:text-gray-700 focus:text-gray-700 no-underline" :to="link.path">{{ link.title }}</saber-link>
					</li>
				</ul>
			</div>
		</div>
		<button class="fixed md:hidden bottom-0 left-0 z-20 flex items-center bg-white border border-gray-400 rounded-sm py-1 px-3 focus:outline-none focus:shadow-outline ml-1 mb-1" @click="sidebar = !sidebar">
			<svg class="fill-current h-3 w-3 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			{{ sidebar ? 'Close' : 'Menu' }}
		</button>
	</aside>
</template>

<script>
	export default {
		data() {
			return {
				sidebar: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sidebar {
		left: -400px;
		transition: left cubic-bezier(0.25, 0.1, 0, 1.03) 150ms;
		&.select {
			left: 0px;
		}
		> div {
			margin-top: 65px;
			padding-bottom: 120px;
			max-height: 100vh;
			@screen md {
				margin-top: 0px;
				padding-bottom: 0px;
				max-height: none;
			}
		}
	}
	.router-link-active {
		@apply text-red-700 font-semibold;
	}
</style>