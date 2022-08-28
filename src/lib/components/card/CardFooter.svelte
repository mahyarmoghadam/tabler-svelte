<script lang="ts">
	import clsx from 'clsx'

	export let footer: string = ''
	export let transparentFooter: boolean = false

	$: classes = clsx('card-footer', {
		'card-footer-transparent': transparentFooter,
	})
</script>

<div class={classes}>
	{#if footer}
		{footer}
	{/if}

	<slot />
</div>
