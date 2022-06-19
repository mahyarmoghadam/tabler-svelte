<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Button } from '$lib/components';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome" />
	</h1>

	<Button color="primary">Primary</Button>
	<Button color="secondary">Secondary</Button>
	<Button color="success">Success</Button>
	<Button color="warning">Warning</Button>
	<Button color="danger">Danger</Button>
	<Button color="info">Info</Button>
	<Button color="light">Light</Button>
	<Button color="dark">Dark</Button>
</section>
