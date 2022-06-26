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

	<Row className="row-cards">
		<Col col="12">
			<Card title="Standard Buttons">
				<div slot="body">
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
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Active state</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block active>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block active>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block active>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block active>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block active>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block active>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block active>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block active>Light</Button>
						</Col>
					</Row>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Disabled</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block disabled>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block disabled>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block disabled>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block disabled>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block disabled>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block disabled>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block disabled>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block disabled>Light</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Outline Buttons">
				<div slot="body">
					<p>Use <code> outline</code> attribute for outline buttons.</p>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Normal</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block outline>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block outline>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block outline>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block outline>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block outline>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block outline>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block outline>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block outline>Light</Button>
						</Col>
					</Row>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Active state</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block outline active>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block outline active>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block outline active>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block outline active>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block outline active>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block outline active>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block outline active>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block outline active>Light</Button>
						</Col>
					</Row>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Disabled</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block outline disabled>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block outline disabled>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block outline disabled>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block outline disabled>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block outline disabled>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block outline disabled>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block outline disabled>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block outline disabled>Light</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Ghost Buttons">
				<div slot="body">
					<p>Use <code> ghost</code>attribute for ghost buttons.</p>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Normal</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block ghost>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block ghost>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block ghost>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block ghost>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block ghost>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block ghost>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block ghost>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block ghost>Light</Button>
						</Col>
					</Row>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Active state</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block ghost active>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block ghost active>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block ghost active>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block ghost active>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block ghost active>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block ghost active>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block ghost active>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block ghost active>Light</Button>
						</Col>
					</Row>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Disabled</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block ghost disabled>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block ghost disabled>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block ghost disabled>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block ghost disabled>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block ghost disabled>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block ghost disabled>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block ghost disabled>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block ghost disabled>Light</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Square Buttons">
				<div slot="body">
					<p>Use <code> square</code>attribute for square buttons.</p>
					<Row alignItems="center" g="2">
						<Col col="12" xl="2" samiBold>Normal</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="primary" block square>Primary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="secondary" block square>Secondary</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="success" block square>Success</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="warning" block square>Warning</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="danger" block square>danger</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="info" block square>info</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl>
							<Button color="dark" block square>Dark</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl color="dark">
							<Button color="light" block square>Light</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Extra colors">
				<div slot="body">
					<Row alignItems="center" g="2">
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="blue">Blue</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="azure">Azure</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="indigo">Indigo</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="purple">Purple</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="pink">Pink</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="red">Red</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="orange">Orange</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="yellow">Yellow</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="lime">Lime</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="green">Green</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="teal">Teal</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button color="cyan">Cyan</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>
	</Row>
</section>
