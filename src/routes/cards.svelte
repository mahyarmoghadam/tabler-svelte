<script lang="ts">
	import Card from '$lib/components/card/Card.svelte'
	import CardBody from '$lib/components/card/CardBody.svelte'
	import Col from '$lib/components/grid/Col.svelte'
	import Row from '$lib/components/grid/Row.svelte'
	let title = 'Card Title'
	let headerLight = true
	let borderless=true
</script>

<Row>
	<Col col="3">
		<Card {title}>
			<CardBody>Simple card</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {title} {headerLight}>
			<CardBody>Card with haeder background</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {borderless}>
			<CardBody {title} >
			<div>Card without border</div>
			</CardBody>
		</Card>
	</Col>
</Row>
