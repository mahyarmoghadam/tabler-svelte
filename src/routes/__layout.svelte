<script lang="ts">
	import { Footer, Header, Navbar } from '@components'

	// import '../app.css';
</script>

<Header />
<Navbar />
<main>
	<div class="page-wrapper">
		<!-- <div class="container-xl"> -->
			<slot />
		<!-- </div> -->
	</div>
</main>

<Footer />

<style lang="scss" global>
	@import '@tabler/core/src/scss/tabler';
	@import '@tabler/core/src/scss/vendor/litepicker';
	@import '@tabler/icons/iconfont/tabler-icons';
</style>
