<template>
	<div>
		<Navbar />
		<main class="container mx-auto px-4">
			<div class="flex flex-wrap mt-32">
				<Sidebar />
				<div class="w-full md:w-3/4">
					<div class="lg:px-8 xl:px-12">
						<div class="markdown-body mb-16">
							<slot name="default" />
						</div>
						<div class="flex flex-wrap text-gray-700">
							<div class="w-full md:w-1/2">
								<p class="font-semibold">Last updated at: {{ new Date(page.updatedAt).toLocaleDateString("en-US") }}</p>
							</div>
							<div class="w-full md:w-1/2 md:text-right">
								<p class="font-semibold"><a :href="$siteConfig.docsRepo + page.slug + '.md'">Edit this page</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/Navbar';
	import Footer from '../components/Footer';
	import Sidebar from '../components/Sidebar';

	export default {
		head() {
			return {
				title: `Empathy — ${this.page.title}`
			}
		},
		props: { page: Object },
		components: { Navbar, Footer, Sidebar },
	}
</script>

<style lang="scss" src="@/sass/app.scss"></style>

<style lang="scss" scoped>
	ol {
		@apply list-decimal;
	}
</style>