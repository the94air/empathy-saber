<template>
	<footer class="py-16">
		<div class="container mx-auto px-4 text-center md:text-left">
			<p class="text-sm">&copy; Empathy {{ date }}</p>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				date: new Date().getFullYear()
			}
		}
	}
</script>