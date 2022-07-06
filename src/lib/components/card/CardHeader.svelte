<script lang="ts">
	import CardActions from './CardActions.svelte'
	import CardTitle from './CardTitle.svelte'

	import clsx from 'clsx'

	export let title: string = ''
	export let subtitle: string = ''
	export let headerLight: boolean = false

	$: classes = clsx('card-header', { 'card-header-light': headerLight })
</script>

<div class={classes}>
	{#if title}
		<CardTitle {subtitle}>
			<slot name="title">
				{title}
			</slot>
		</CardTitle>
	{/if}

	{#if $$slots['actions']}
		<CardActions>
			<slot name="actions" />
		</CardActions>
	{/if}

	<slot />
</div>
