<script lang="ts">
	import Card from '$lib/components/card/Card.svelte'
	import CardHeader from '$lib/components/card/CardHeader.svelte'
	import CardBody from '$lib/components/card/CardBody.svelte'
	import CardFooter from '$lib/components/card/CardFooter.svelte'
	import Col from '$lib/components/grid/Col.svelte'
	import Row from '$lib/components/grid/Row.svelte'
	import Button from '$lib/components/button/button.svelte'

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
	let sideStatus = 'top'
	let bgStatus = 'danger'
	let sideRibbon = 'top'
	let bgRibbon = 'yellow'
	let progressbar = 38
	let stacked = true
	let colImage = 3
	let orderImage = 'md-last'
	let footer = 'This is standard card footer'
	let transparentFooter = true
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

	<Col col="3">
		<Card {sideStatus} {bgStatus}>
			<CardBody title={'Card with top status'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col col="3">
		<Card sideStatus={'bottom'} bgStatus={'success'}>
			<CardBody title={'Card with bottom status'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card sideStatus={'start'} bgStatus={'primary'}>
			<CardBody title={'Card with bottom status'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card {sideRibbon} {bgRibbon}>
			<svg
				slot="ribbon"
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
			<CardBody title={'Card with top ribbon'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa
				ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card bgRibbon={'red'}>
			<span slot="ribbon">NEW</span>
			<CardBody title={'Card with text ribbon'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur culpa
				ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col col="3">
		<Card {progressbar}>
			<CardBody title={'Card with progress bar'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card {stacked}>
			<CardBody title={'Stacked card'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="6">
		<Card {colImage}>
			<img
				slot="side-image"
				src="https://preview.tabler.io/static/photos/2854fd67ddbd6217.jpg"
				class="w-100 h-100 object-cover"
				alt="Card side" />
			<CardBody slot="side-body" title={'Card with left side image'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>
</Row>

<Row>
	<Col col="6">
		<Card {colImage} {orderImage}>
			<img
				slot="side-image"
				src="https://preview.tabler.io/static/photos/de6d0fd1feebb6a2.jpg"
				class="w-100 h-100 object-cover"
				alt="Card side" />
			<CardBody slot="side-body" title={'Card with right side image'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card>
			<div
				class="card-img-top img-responsive img-responsive-21x9"
				style="background-image: url(https://preview.tabler.io/static/photos/9f36332564ca271d.jpg)" />
			<CardBody title={'Card with top image'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card>
			<CardBody title={'Card with bottom image'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
			<div
				class="card-img-bottom img-responsive img-responsive-21x9"
				style="background-image: url(https://preview.tabler.io/static/photos/56614e12b2a7bd68.jpg)" />
		</Card>
	</Col>
</Row>

<Row>
	<Col col="3">
		<Card {footer}>
			<CardBody title={'Card with footer'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card footer={'This is transparent card footer'} {transparentFooter}>
			<CardBody title={'Card with transparent footer'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="3">
		<Card>
			<CardBody title={'Card with footer button'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
			<CardFooter>
				<Button to={'#'}>Go somewhere</Button>
			</CardFooter>
		</Card>
	</Col>

	<Col col="3">
		<Card>
			<CardBody title={'Card with footer buttons'} {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
			<CardFooter>
				<div class="d-flex">
					<Button to={'#'} link={true}>Cancel</Button>
					<Button to={'#'} className={'ms-auto'}>Go somewhere</Button>
				</div>
			</CardFooter>
		</Card>
	</Col>
</Row>

<Row>
	<Col col="3">
		<Card>
			<CardBody {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
			<CardFooter>
				<Row alignItems={'center'}>
					<Col col={'auto'}>
						<Button to={'#'} link={true}>More information</Button>
					</Col>
					<Col col={'auto'} className={'ms-auto'}>Radio</Col>
				</Row>
			</CardFooter>
		</Card>
	</Col>

	<Col col="3">
		<Card>
			<CardBody {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
			<CardFooter>
				<Row alignItems={'center'}>
					<Col col={'auto'} className={'ms-auto'}>
						<div class="avatar-list avatar-list-stacked">
							<span
								class="avatar avatar-sm avatar-rounded"
								style="background-image: url(https://preview.tabler.io/static/avatars/000m.jpg)" />
							<span class="avatar avatar-sm avatar-rounded">JL</span>
							<span
								class="avatar avatar-sm avatar-rounded"
								style="background-image: url(https://preview.tabler.io/static/avatars/002m.jpg)" />
							<span
								class="avatar avatar-sm avatar-rounded"
								style="background-image: url(https://preview.tabler.io/static/avatars/003m.jpg)" />
							<span
								class="avatar avatar-sm avatar-rounded"
								style="background-image: url(https://preview.tabler.io/static/avatars/000f.jpg)" />
							<span class="avatar avatar-sm avatar-rounded">+3</span>
						</div>
					</Col>
				</Row>
			</CardFooter>
		</Card>
	</Col>

	<Col col="4">
		<Card>
			<CardHeader>
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<a class="nav-link active" href="#"> Active </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon me-1"
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
							Link
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> Disabled </a>
					</li>
					<li class="nav-item ms-auto">
						<a class="nav-link" href="#">
							<svg
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
									d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle
									cx="12"
									cy="12"
									r="3" />
							</svg>
						</a>
					</li>
				</ul>
			</CardHeader>
			<CardBody {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>

	<Col col="4">
		<Card>
			<CardHeader>
				<ul class="nav nav-pills card-header-pills">
					<li class="nav-item">
						<a class="nav-link active" href="#"> Active </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon me-1"
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
							Link
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> Disabled </a>
					</li>
					<li class="nav-item ms-auto">
						<a class="nav-link" href="#">
							<svg
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
									d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle
									cx="12"
									cy="12"
									r="3" />
							</svg>
						</a>
					</li>
				</ul>
			</CardHeader>
			<CardBody {textMuted}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</Col>
</Row>
