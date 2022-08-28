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

<div class="container-xl">
	<div class="page-header d-print-none">
		<div class="row g-2 align-items-center">
			<div class="col">
				<h2 class="page-title">Cards</h2>
			</div>
		</div>
	</div>
</div>

<div class="page-body">
	<div class="container-xl">
		<Row className={'row-cards'}>
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

			<Col col="3" />

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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur
						culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card {bgCard}>
					<CardBody title={'Card with primary light background'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur
						culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
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
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur
							culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
						</p>
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card {sideStatus} {bgStatus}>
					<CardBody title={'Card with top status'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card sideStatus={'bottom'} bgStatus={'success'}>
					<CardBody title={'Card with bottom status'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card sideStatus={'start'} bgStatus={'primary'}>
					<CardBody title={'Card with bottom status'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur
						culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card bgRibbon={'red'}>
					<span slot="ribbon">NEW</span>
					<CardBody title={'Card with text ribbon'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at consectetur
						culpa ducimus eum fuga fugiat, ipsa iusto, modi nostrum recusandae reiciendis saepe.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card {progressbar}>
					<CardBody title={'Card with progress bar'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card {stacked}>
					<CardBody title={'Stacked card'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="6">
				<Card {colImage} {orderImage}>
					<img
						slot="side-image"
						src="https://preview.tabler.io/static/photos/de6d0fd1feebb6a2.jpg"
						class="w-100 h-100 object-cover"
						alt="Card side" />
					<CardBody slot="side-body" title={'Card with right side image'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<div
						class="card-img-top img-responsive img-responsive-21x9"
						style="background-image: url(https://preview.tabler.io/static/photos/9f36332564ca271d.jpg)" />
					<CardBody title={'Card with top image'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<CardBody title={'Card with bottom image'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
					<div
						class="card-img-bottom img-responsive img-responsive-21x9"
						style="background-image: url(https://preview.tabler.io/static/photos/56614e12b2a7bd68.jpg)" />
				</Card>
			</Col>

			<Col col="3">
				<Card {footer}>
					<CardBody title={'Card with footer'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card footer={'This is transparent card footer'} {transparentFooter}>
					<CardBody title={'Card with transparent footer'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<CardBody title={'Card with footer button'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
					<CardFooter>
						<Button to={'#'}>Go somewhere</Button>
					</CardFooter>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<CardBody title={'Card with footer buttons'} {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
					<CardFooter>
						<div class="d-flex">
							<Button to={'#'} link>Cancel</Button>
							<Button to={'#'} className={'ms-auto'}>Go somewhere</Button>
						</div>
					</CardFooter>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<CardBody {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
					<CardFooter>
						<Row alignItems={'center'}>
							<Col col={'auto'}>
								<Button to={'#'} link>More information</Button>
							</Col>
							<Col col={'auto'} className={'ms-auto'}>Radio</Col>
						</Row>
					</CardFooter>
				</Card>
			</Col>

			<Col col="3">
				<Card>
					<CardBody {textMuted}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
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
								<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
									Disabled
								</a>
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
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
								<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
									Disabled
								</a>
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit
						incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae
						voluptatem.
					</CardBody>
				</Card>
			</Col>

			<Col col="4">
				<div class="card-tabs ">
					<!-- Cards navigation -->
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item" role="presentation">
							<a
								href="#tab-top-1"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								role="tab"
								tabindex="-1">Tab 1</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-top-2"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								role="tab"
								tabindex="-1">Tab 2</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-top-3"
								class="nav-link active"
								data-bs-toggle="tab"
								aria-selected="true"
								role="tab">Tab 3</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-top-4"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								tabindex="-1"
								role="tab">Tab 4</a>
						</li>
					</ul>
					<div class="tab-content">
						<!-- Content of card #1 -->
						<div id="tab-top-1" class="card tab-pane show" role="tabpanel">
							<CardBody title={'Content of tab #1'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #2 -->
						<div id="tab-top-2" class="card tab-pane" role="tabpanel">
							<CardBody title={'Content of tab #2'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #3 -->
						<div id="tab-top-3" class="card tab-pane active" role="tabpanel">
							<CardBody title={'Content of tab #3'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #4 -->
						<div id="tab-top-4" class="card tab-pane" role="tabpanel">
							<CardBody title={'Content of tab #4'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
					</div>
				</div>
			</Col>

			<Col>
				<div class="card-tabs ">
					<div class="tab-content">
						<!-- Content of card #1 -->
						<div id="tab-bottom-1" class="card tab-pane active show" role="tabpanel">
							<CardBody title={'Content of tab #1'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #2 -->
						<div id="tab-bottom-2" class="card tab-pane" role="tabpanel">
							<CardBody title={'Content of tab #2'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #3 -->
						<div id="tab-bottom-3" class="card tab-pane" role="tabpanel">
							<CardBody title={'Content of tab #3'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
						<!-- Content of card #4 -->
						<div id="tab-bottom-4" class="card tab-pane" role="tabpanel">
							<CardBody title={'Content of tab #4'} {textMuted}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquid
								distinctio dolorem expedita, fugiat hic magni molestiae molestias odit.
							</CardBody>
						</div>
					</div>
					<!-- Cards navigation -->
					<ul class="nav nav-tabs nav-tabs-bottom" role="tablist">
						<li class="nav-item" role="presentation">
							<a
								href="#tab-bottom-1"
								class="nav-link active"
								data-bs-toggle="tab"
								aria-selected="true"
								role="tab">Tab 1</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-bottom-2"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								tabindex="-1"
								role="tab">Tab 2</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-bottom-3"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								tabindex="-1"
								role="tab">Tab 3</a>
						</li>
						<li class="nav-item" role="presentation">
							<a
								href="#tab-bottom-4"
								class="nav-link"
								data-bs-toggle="tab"
								aria-selected="false"
								tabindex="-1"
								role="tab">Tab 4</a>
						</li>
					</ul>
				</div>
			</Col>

			<Col col="12">
				<Card title={'Cards inside card'}>
					<CardBody>
						<Row className={'row-cards'}>
							<Col md={true}>
								<Card title={'First card'} sideStatus={'top'} bgStatus={'red'}>
									<CardBody className={'p-0'}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-100"
											preserveAspectRatio="none"
											width="400"
											height="200"
											viewBox="0 0 400 200"
											stroke="var(--tblr-border-color, #b8cef1)">
											<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
											<line x1="0" y1="0" x2="400" y2="200" />
											<line x1="0" y1="200" x2="400" y2="0" />
										</svg>
									</CardBody>
								</Card>
							</Col>
							<Col md={true}>
								<Card title={'Second card'} sideStatus={'top'} bgStatus={'green'}>
									<CardBody className={'p-0'}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-100"
											preserveAspectRatio="none"
											width="400"
											height="200"
											viewBox="0 0 400 200"
											stroke="var(--tblr-border-color, #b8cef1)">
											<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
											<line x1="0" y1="0" x2="400" y2="200" />
											<line x1="0" y1="200" x2="400" y2="0" />
										</svg>
									</CardBody>
								</Card>
							</Col>
							<Col md={true}>
								<Card title={'Third card'} sideStatus={'top'} bgStatus={'blue'}>
									<CardBody className={'p-0'}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-100"
											preserveAspectRatio="none"
											width="400"
											height="200"
											viewBox="0 0 400 200"
											stroke="var(--tblr-border-color, #b8cef1)">
											<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
											<line x1="0" y1="0" x2="400" y2="200" />
											<line x1="0" y1="200" x2="400" y2="0" />
										</svg>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>

			<Col col="12">
				<div class="card-group">
					<Card title={'fist card'}>
						<CardBody className={'p-0'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-100"
								preserveAspectRatio="none"
								width="400"
								height="200"
								viewBox="0 0 400 200"
								stroke="var(--tblr-border-color, #b8cef1)">
								<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
								<line x1="0" y1="0" x2="400" y2="200" />
								<line x1="0" y1="200" x2="400" y2="0" />
							</svg>
						</CardBody>
					</Card>
					<Card title={'second card'}>
						<CardBody className={'p-0'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-100"
								preserveAspectRatio="none"
								width="400"
								height="200"
								viewBox="0 0 400 200"
								stroke="var(--tblr-border-color, #b8cef1)">
								<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
								<line x1="0" y1="0" x2="400" y2="200" />
								<line x1="0" y1="200" x2="400" y2="0" />
							</svg>
						</CardBody>
					</Card>
					<Card title={'third card'}>
						<CardBody className={'p-0'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-100"
								preserveAspectRatio="none"
								width="400"
								height="200"
								viewBox="0 0 400 200"
								stroke="var(--tblr-border-color, #b8cef1)">
								<!--	<rect x=".5" y=".5" width="399" height="199" fill="#fff" rx="2"></rect>-->
								<line x1="0" y1="0" x2="400" y2="200" />
								<line x1="0" y1="200" x2="400" y2="0" />
							</svg>
						</CardBody>
					</Card>
				</div>
			</Col>

			<Col col="12">
				<Row className={'row-cards row-deck'}>
					<Col>
						<Card {title} footer={'Last updated 3 mins ago'}>
							<CardBody>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card {title} footer={'Last updated 3 mins ago'}>
							<CardBody>
								This card has supporting text below as a natural lead-in to additional content.
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card title={'Card with very long content'} footer={'Last updated 3 mins ago'}>
							<CardBody>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Col>

			<Col col={'4'}>
				<Card>
					<div class="empty">
						<div class="empty-img">
							<img
								src="https://preview.tabler.io/static/illustrations/undraw_quitting_time_dm8t.svg"
								height="128"
								alt="" />
						</div>
						<p class="empty-title">No results found</p>
						<p class="empty-subtitle text-muted">
							Try adjusting your search or filter to find what you're looking for.
						</p>
						<div class="empty-action">
							<Button to={'.'} color={'primary'}>
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
									<circle cx="10" cy="10" r="7" />
									<line x1="21" y1="21" x2="15" y2="15" />
								</svg>
								Search again
							</Button>
						</div>
					</div>
				</Card>
			</Col>

			<Col col="4">
				<Card>
					<CardBody>
						<div class="mb-3">
							<div class="form-label">Card number</div>
							<input
								type="text"
								name="input-mask"
								class="form-control"
								data-mask="0000 0000 0000 0000"
								data-mask-visible="true"
								autocomplete="off" />
						</div>
						<div class="mb-3">
							<div class="form-label">Card name</div>
							<input type="text" class="form-control" />
						</div>
						<Row>
							<Col col="8">
								<div class="mb-3">
									<label class="form-label">Expiration date</label>
									<Row className={'g-2'}>
										<Col>
											<select class="form-select">
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
											</select>
										</Col>

										<Col>
											<select class="form-select">
												<option value="2020">2020</option>
												<option value="2021">2021</option>
												<option value="2022">2022</option>
												<option value="2023">2023</option>
												<option value="2024">2024</option>
												<option value="2025">2025</option>
												<option value="2026">2026</option>
												<option value="2027">2027</option>
												<option value="2028">2028</option>
												<option value="2029">2029</option>
												<option value="2030">2030</option>
											</select>
										</Col>
									</Row>
								</div>
							</Col>

							<Col>
								<div class="mb-3">
									<div class="form-label">CVV</div>
									<input type="number" class="form-control" />
								</div>
							</Col>
						</Row>

						<div class="mt-2">
							<Button to={'#'} color={'primary'} block>Pay now</Button>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</div>
</div>
