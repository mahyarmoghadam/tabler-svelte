<script lang="ts">
	import clsx from 'clsx'
	import { onMount } from 'svelte/internal'

	import CardBody from './CardBody.svelte'
	import CardFooter from './CardFooter.svelte'
	import CardHeader from './CardHeader.svelte'

	export let title: string = ''
	export let footer: string = ''
	export let visible: boolean = true
	export let headerLight: boolean = false
	export let borderless: boolean = false
	export let subtitle: string = ''
	export let toHref: string = ''
	export let linkRotate: boolean = false
	export let linkPop: boolean = false
	export let rotateRight: boolean = false
	export let rotateLeft: boolean = false
	export let cardActive: boolean = false
	export let cardInactive: boolean = false
	export let bgStamp: string = ''
	export let bgCard: string = ''
	export let txtStamp: string = ''
	export let bgStatus: string = ''
	export let sideStatus: string = ''

	let divCard: HTMLDivElement

	onMount(async () => {
		if (toHref) {
			let aCard = document.createElement('a')
			aCard.setAttribute('href', toHref)
			aCard.setAttribute('class', `${classes} card-link`)
			aCard.innerHTML = divCard.innerHTML
			divCard.replaceWith(aCard)
		}
	})

	$: classes = clsx('card', {
		'card-borderless': borderless,
		'card-link-rotate': linkRotate,
		'card-link-pop': linkPop,
		'card-rotate-right': rotateRight,
		'card-rotate-left': rotateLeft,
		'card-active': cardActive,
		'card-inactive': cardInactive,
		['bg-' + bgCard]: bgCard,
	})
</script>

{#if visible}
	<div class={classes} bind:this={divCard}>
		{#if sideStatus && bgStatus}
			<div class="card-status-{sideStatus} bg-{bgStatus}" />
		{/if}

		{#if $$slots['stamp']}
			<div class="card-stamp">
				<div class="card-stamp-icon {bgStamp && `bg-${bgStamp}`} {txtStamp && `text-${txtStamp}`}">
					<!-- Download SVG icon from http://tabler-icons.io -->
					<slot name="stamp" />
				</div>
			</div>
		{/if}

		<slot name="header">
			{#if title || $$slots['header:actions']}
				<CardHeader {title} {headerLight} {subtitle}>
					<slot slot="actions" name="header:actions" />
				</CardHeader>
			{/if}
		</slot>

		<slot />

		{#if $$slots['body']}
			<CardBody>
				<slot name="body" />
			</CardBody>
		{/if}

		<slot name="footer">
			{#if footer || $$slots['footer:actions']}
				<CardFooter {footer}>
					<slot name="footer:actions" />
				</CardFooter>
			{/if}
		</slot>
	</div>
{/if}
