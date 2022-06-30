<script lang="ts">
	import Card from '$lib/components/card/Card.svelte'
	import CardBody from '$lib/components/card/CardBody.svelte'
	import Col from '$lib/components/grid/Col.svelte'
	import Row from '$lib/components/grid/Row.svelte'

	let title = 'Card Title'
	let headerLight = true
	let borderless = true
	let subtitle = 'Subtitle'
	let toHref = '#'
	let linkRotate = true
	let linkPop = true
	let rotateRight = true
	let rotateLeft = true
	let cardActive = true
	let cardInactive = true
	let bgStamp = 'yellow'
	let textMuted = true
	let bgCard = 'primary-lt'
	let txtStamp = 'primary'
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
			<CardBody {title}>
				<div>Card without border</div>
			</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {title} {subtitle}>
			<CardBody>Card with title and subtitle</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col col="3">
		<Card {toHref}>
			<CardBody>Default hover effect</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {toHref} {linkRotate}>
			<CardBody>Rotate hover effect</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {toHref} {linkPop}>
			<CardBody>Pop hover effect</CardBody>
		</Card>
	</Col>
</Row>
<Row>
	<Col col="3">
		<Card {rotateRight}>
			<CardBody>Card rotate right</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {rotateLeft}>
			<CardBody>Card rotate left</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {cardActive}>
			<CardBody>
				<p>This is a card with active state.</p>
			</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {cardInactive}>
			<CardBody>
				<p>This is some text inactive state.</p>
			</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {bgStamp}>
			<svg
				slot="stamp"
				xmlns="http://www.w3.org/2000/svg"
				class="icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
				<path d="M9 17v1a3 3 0 0 0 6 0v-1" />
			</svg>
			<CardBody title={'Card with icon bg'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa
				ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
			</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card {bgCard}>
			<CardBody title={'Card with primary light background'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa
				ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
			</CardBody>
		</Card>
	</Col>
	<Col col="3">
		<Card bgStamp={'white'} {txtStamp} bgCard={'primary'}>
			<svg
				slot="stamp"
				xmlns="http://www.w3.org/2000/svg"
				class="icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
			</svg>
			<CardBody title={'Card with background and icon'}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa
					ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
				</p>
			</CardBody>
		</Card>
	</Col>
</Row>
