<script lang="ts">
	import { Footer, Header } from '@components'

	// import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>

<Footer />

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style lang="scss" global>
	@import '@tabler/core/src/scss/tabler';
	@import '@tabler/core/src/scss/vendor/litepicker';
	@import '@tabler/icons/iconfont/tabler-icons';
</style>
