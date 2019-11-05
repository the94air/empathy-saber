<template>
	<nav class="fixed z-20 inset-x-0 top-0 bg-white border-b border-gray-200">
		<div style="opacity: var(--loading)" role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
			<div class="mdc-linear-progress__buffer"></div>
			<div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
				<span class="mdc-linear-progress__bar-inner"></span>
			</div>
			<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
				<span class="mdc-linear-progress__bar-inner"></span>
			</div>
		</div>
		<div class="container px-4 mx-auto">
			<div class="flex justify-between items-center flex-wrap">
				<div>
					<saber-link to="/" class="block no-underline py-3">
						<div class="flex items-center">
							<img src="@/static/images/empathy-gray.svg" class="mr-2 h-8" alt="Empathy">
						</div>
					</saber-link>
				</div>
				<div class="md:hidden py-4">
					<button class="bg-white border border-gray-400 rounded-sm py-2 px-3 focus:outline-none focus:shadow-outline" @click="navbar = !navbar">
						<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div class="navbar-menu hidden md:block w-full md:w-auto mb-5 md:mb-0 py-0 md:py-4" :class="[navbar ? 'show' : '']">
					<ul class="flex flex-col md:flex-row items-center">
						<li class="relative mr-0 md:mr-5">
							<Search :page="page" />
						</li>
						<li class="relative mr-0 md:mr-5">
							<saber-link to="/docs" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600">Docs</saber-link>
						</li>
						<li class="relative mr-0 md:mr-5">
							<a target="_blank" href="/demo" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-gray-700 hover:text-gray-600">Demo</a>
						</li>
						<li class="relative mr-0 md:mr-5">
							<a target="_blank" href="https://github.com/the94air/empathy" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-lg text-gray-900 hover:text-gray-600">
								<Fa :icon="['fab',  'github']" />
							</a>
						</li>
						<li class="relative mr-0 md:mr-5">
							<a target="_blank" href="https://twitter.com/abdalla__arbab" class="block md:inline w-full md:w-auto px-3 py-3 md:px-0 md:py-5 no-underline text-lg text-blue-400 hover:text-blue-300">
								<Fa :icon="['fab',  'twitter']" />
							</a>
						</li>
						<li class="relative my-1 md:my-0 md:my-0 mr-0">
							<a href="/" class="block md:inline w-full md:w-auto bg-gray-100 border border-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:border-gray-300 focus:border-gray-300 rounded-lg px-3 py-2 md:px-4 md:py-2 no-underline text-gray-700 hover:text-gray-700" @click.prevent="navbarDropdown = !navbarDropdown">Version (v 1.0)</a>
							<transition name="dropdown">
	                            <ul class="navbar-dropdown absolute right-0 md:mt-8 z-20 bg-white rounded shadow-md p-2" v-show="navbarDropdown">
									<!-- <li class="block mb-2">
	                                    <a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">v 3.0</a>
	                                </li>
	                                <li class="block mb-2">
	                                    <a href="#" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">v 2.0</a>
	                                </li> -->
	                                <li class="block">
	                                    <saber-link to="/docs/1.0" class="block no-underline rounded hover:bg-gray-700 focus:bg-gray-700 text-gray-700 hover:text-white focus:text-white px-3 py-1">v 1.0</saber-link>
	                                </li>
	                            </ul>
	                        </transition>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import Search from './Search';

	export default {
		data() {
			return {
				navbar: false,
				navbarDropdown: false,
				avatarDropdown: false,
			}
		},
		props: ['page'],
		components: { Search },
	}
</script>

<style lang="scss">
	.navbar-menu {
	    &.show {
	        @apply block;
	    }
	    ul li a.select {
	        @apply border rounded-lg font-bold;
	        border-color: theme('colors.gray.700'); 
	    }
	    @screen md {
	        ul li a {
	            &::after {
	                content: '';
	                @apply block absolute top-0 left-0 right-0 h-0 rounded-b-lg;
	                background: theme('colors.gray.700');
	                transition: height ease 150ms;
	            }
	        }
	        ul li a.select {
	            @apply border-none;
	            &::after {
	                @apply h-1;
	            }
	        }
	    }
	    .navbar-dropdown {
	        min-width: 10rem;
	        li a {
	            transition: none;
	        }
	    }
	}
    .dropdown-enter-active, .dropdown-leave-active {
        transition: all 150ms ease;
    }
    .dropdown-enter, .dropdown-leave-to  {
        transform: translateY(-10px) translateX(10px);
        opacity: 0;
    }
	.pt-4-5 {
		padding: 0;
		@screen md {
			padding-top: 0.9rem;
		}
	}
</style>