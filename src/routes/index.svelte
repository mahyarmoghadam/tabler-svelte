<script context="module" lang="ts">
</script>

<script lang="ts">
	import { Button } from '$lib/components'
	import Card from '$lib/components/card/Card.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome" />
	</h1>

	<Card title="Standard Buttons">
		<div slot="body">
			<div class="row g-2 align-items-center">
				<div class="col-12 col-xl-2 font-weight-semibold">Normal</div>
				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="primary" block className="test">Primary</Button>
				</div>
				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="secondary" block>Secondary</Button>
				</div>
				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="success" block>Success</Button>
				</div>

				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="warning" block>Warning</Button>
				</div>

				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="danger" block>Danger</Button>
				</div>
				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="info" block>Info</Button>
				</div>

				<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
					<Button color="dark" block>Dark</Button>
				</div>

				<div class="col-6 col-sm-4 col-md-2 col-xl bg-dark py-3">
					<Button color="light" block>Light</Button>
				</div>
			</div>
		</div>
	</Card>
</section>
