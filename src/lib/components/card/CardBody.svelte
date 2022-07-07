<script lang="ts">
	import clsx from 'clsx'

	import CardTitle from './CardTitle.svelte'

	export let title: string = ''
	export let textMuted: boolean = false
	export let className: string = ''

	$: classes = clsx('card-body', { [className]: className })
</script>

<div class={classes}>
	{#if title}
		<CardTitle>
			<slot name="title">
				{title}
			</slot>
		</CardTitle>
	{/if}

	{#if textMuted}
		<p class="text-muted">
			<slot />
		</p>
	{:else}
		<slot />
	{/if}
</div>
