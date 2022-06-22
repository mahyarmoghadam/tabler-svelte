<script lang="ts">
	import type { Colors } from '$lib/types/colors'
	import clsx from 'clsx'
	export let block: boolean = false
	export let color: Colors = 'primary'
	export let disabled: boolean = false
	export let link: boolean = false
	export let loading: boolean = false
	export let outline: boolean = false
	export let square: boolean = false
	export let pill: boolean = false
	export let ghost: boolean = false
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let visible: boolean = true
	export let to: string = ''
	export let className: string = ''

	$: classes = clsx({
		'btn': !link,
		[`btn-${color}`]: !link && !outline && !ghost && color,
		[`btn-outline-${color}`]: !link && outline && color,
		[`btn-ghost-${color}`]: !link && ghost && color,
		[`btn-${size}`]: !link && size,
		'btn-square': !link && square,
		'btn-pill': !link && pill,
		'btn-loading': !link && loading,
		'btn-block': !link && block,
		'disabled': !link && disabled,
		'w-100': block,
		[className]: className,
	})
</script>

{#if visible}
	{#if to}
		<a class={classes} {disabled} role="button" href={to} type="button" on:click {...$$restProps}>
			<slot />
		</a>
	{:else}
		<button class={classes} {disabled} on:click {...$$restProps}>
			<slot />
		</button>
	{/if}
{/if}
