<script context="module" lang="ts">
</script>

<script lang="ts">
	import { Button, Row, Card, Col } from '$lib/components'
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

			<Row alignItems="center" g="2">
				<Col col="12" xl="2" samiBold>Normal</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="primary" block>Primary</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="secondary" block>Secondary</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="success" block>Success</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="warning" block>Warning</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="danger" block>danger</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="info" block>info</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl>
					<Button color="dark" block>Dark</Button>
				</Col>
				<Col col="6" sm="4" md="2" py="3" xl color="dark">
					<Button color="light" block>Light</Button>
				</Col>
			</Row>
		</div>
	</Card>
</section>
