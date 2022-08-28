<script context="module" lang="ts">
</script>

<script lang="ts">
	import { Button, Row, Card, Col } from '$lib/components'
	import {
BrandBitbucket,
		BrandDribbble,
		BrandFacebook,
		BrandFlickr,
		BrandGithub,
		BrandGoogle,
		BrandInstagram,
		BrandPinterest,
		BrandTabler,
		BrandTwitter,
		BrandVimeo,
		BrandVk,
		BrandYoutube,
		Rss,
	} from 'tabler-icons-svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<a href="cards">Cards page</a>
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
							<Button block color="blue">Blue</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="azure">Azure</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="indigo">Indigo</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="purple">Purple</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="pink">Pink</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="red">Red</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="orange">Orange</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="yellow">Yellow</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="lime">Lime</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="green">Green</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="teal">Teal</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button block color="cyan">Cyan</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Icon buttons">
				<div slot="body">
					<Row alignItems="center" g="2">
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="facebook" block>
								<BrandFacebook size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="twitter" block>
								<BrandTwitter size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="google" block>
								<BrandGoogle size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="youtube" block>
								<BrandYoutube size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="vimeo" block>
								<BrandVimeo size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="dribbble" block>
								<BrandDribbble size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="github" block>
								<BrandGithub size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="instagram" block>
								<BrandInstagram size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="pinterest" block>
								<BrandPinterest size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="vk" block>
								<BrandVk size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="rss" block>
								<Rss size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="flickr" block>
								<BrandFlickr size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="bitbucket" block>
								<BrandBitbucket size="48" strokeWidth="1" />
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button iconButton icon="tabler" block>
								<BrandTabler size="48" strokeWidth="1" />
							</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>

		<Col col="12">
			<Card title="Social colors">
				<div slot="body">
					<Row alignItems="center" g="2">
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="facebook" block>
								<BrandFacebook size="48" strokeWidth="1" />
								Facebook
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="twitter" block>
								<BrandTwitter size="48" strokeWidth="1" />
								Twitter
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="google" block>
								<BrandGoogle size="48" strokeWidth="1" />
								Google
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="youtube" block>
								<BrandYoutube size="48" strokeWidth="1" />
								Youtube
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="vimeo" block>
								<BrandVimeo size="48" strokeWidth="1" />
								Vimeo
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="dribbble" block>
								<BrandDribbble size="48" strokeWidth="1" />
								Dribbble
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="github" block>
								<BrandGithub size="48" strokeWidth="1" />
								Github
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="instagram" block>
								<BrandInstagram size="48" strokeWidth="1" />
								Instagram
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="pinterest" block>
								<BrandPinterest size="48" strokeWidth="1" />
								Pinterest
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="vk" block>
								<BrandVk size="48" strokeWidth="1" />
								Vk
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="rss" block>
								<Rss size="48" strokeWidth="1" />
								Rss
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="flickr" block>
								<BrandFlickr size="48" strokeWidth="1" />
								Flickr
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="bitbucket" block>
								<BrandBitbucket size="48" strokeWidth="1" />
								Bitbucket
							</Button>
						</Col>
						<Col col="6" sm="4" md="2" py="3" xl="auto">
							<Button icon="tabler" block>
								<BrandTabler size="48" strokeWidth="1" />
								Tabler
							</Button>
						</Col>
					</Row>
				</div>
			</Card>
		</Col>
	</Row>
</section>
