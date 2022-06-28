<script lang="ts">
	import clsx from 'clsx'

	import CardBody from './CardBody.svelte'
	import CardFooter from './CardFooter.svelte'
	import CardHeader from './CardHeader.svelte'

	export let title: string = ''
	export let footer: string = ''
	export let visible: boolean = true
	export let headerLight: boolean = false
	export let borderless: boolean = false

	$: classes = clsx('card', {
		'card-borderless': borderless,
	})
</script>

{#if visible}
	<div class={classes}>
		<slot name="header">
			{#if title || $$slots['header:actions']}
				<CardHeader {title} {headerLight}>
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
