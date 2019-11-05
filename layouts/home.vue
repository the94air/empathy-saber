<template>
	<div>
		<Navbar />
		<main class="mt-16">
			<header class="pb-40 pt-32">
				<div class="container mx-auto px-4">
					<div class="w-full">
						<div class="mb-12">
							<img class="mx-auto header-image" src="@/static/images/empathy.svg" alt="Empathy">
						</div>
						<div class="text-center mb-10">
							<h2 class="mb-4 text-lg font-bold">Build A Nice Looking Admin Panel In A Blink.</h2>
							<p class="text-base">A Lightweight Admin Panel Components With Tailwindcss & Vue.</p>
						</div>
						<div class="text-center ">
							<saber-link to="/docs" class="inline-block bg-gray-800 border border-transparent text-lg no-underline hover:bg-gray-900 focus:bg-gray-900 text-white hover:text-white focus:text-white font-bold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-6 py-3 mr-2 cursor-pointer mr-4">Get started</saber-link>
							<a target="_blank" href="https://github.com/the94air/empathy" class="inline-block bg-gray-100 border border-gray-300 text-lg text-gray-800 no-underline hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-800 focus:text-gray-800 hover:border-gray-400 focus:border-gray-400 font-bold focus:outline-none focus:shadow-outline leading-tight rounded select-none align-middle whitespace-no-wrap px-6 py-3 mr-2 cursor-pointer">GitHub</a>
						</div>
					</div>
				</div>
			</header>

			<section class="py-24 bg-gray-100">
				<div class="container mx-auto px-4">
					<div class="text-center">
						<h2 class="mb-16">Features</h2>
					</div>
					<div class="flex flex-wrap -mx-2">
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-16">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'feather']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Lightweight</h3>
								<p>It is small because it depends on Tailwindcss. It can become even tinier using PurgeCSS.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-16">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'cubes']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Components based</h3>
								<p>It uses utility classes to build components and no need to edit a CSS file to modify them.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-16">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'shipping-fast']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Deliver in time</h3>
								<p>It can help you build admin panels in a matter of minutes instead of writing the same code over and over.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-16">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'hand-holding-heart']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Open source</h3>
								<p>The entire project is MIT licensed. You can use it as you wish and for free.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-0">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'paste']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Copy paste</h3>
								<p>You don't need to clone the repository to start. Just copy, paste, and edit it the way you want.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-0">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'paint-roller']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Fully customizable</h3>
								<p>You can always easily change the style and the colors of a component using tailwind color classes.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-0">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'mobile-alt']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Responsive</h3>
								<p>It is responsive to use from small screens to large screens with no trouble.</p>
							</div>
						</div>
						<div class="w-full md:w-1/4 px-2 mb-8 md:mb-0">
							<div class="flex items-center justify-center w-32 h-32 text-5xl text-center bg-gray-800 text-white rounded-full mb-5 mx-auto">
								<Fa :icon="['fas', 'life-ring']" />
							</div>
							<div class="text-center">
								<h3 class="text-2xl">Support</h3>
								<p>You can support us by adding more components to the library. You can make a pull request any time.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/Navbar';
	import Footer from '../components/Footer';

	export default {
		components: { Navbar, Footer },
	}
</script>

<style lang="scss" src="@/sass/app.scss"></style>

<style lang="scss" scoped>
	.header-image {
		width: 100%;
		max-width: 400px;
		@screen md {
			border: 1px solid rgba(0, 0, 0, 0.05);
		    border-top: none;
		    border-radius: 2rem;
		    padding: 2rem 2.5rem;
		    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.05);
		    background: rgb(250, 253, 255);
		}
	}
</style>