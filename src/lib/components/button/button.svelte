<script lang="ts">
	import type { Colors } from '$lib/types/colors'
	import type { Icons } from '$lib/types/icons'
	import clsx from 'clsx'
	let className = ''
	export { className as class }

	export let block: boolean = false
	export let color: Colors | undefined = undefined
	export let icon: Icons | undefined = undefined
	export let disabled: boolean = false
	export let link: boolean = false
	export let loading: boolean = false
	export let outline: boolean = false
	export let square: boolean = false
	export let pill: boolean = false
	export let ghost: boolean = false
	export let active: boolean = false
	export let iconButton: boolean = false
	export let size: 'sm' | 'md' | 'lg' | undefined = undefined
	export let visible: boolean = true
	export let href: string = ''

	$: classes = clsx({
		'btn': true,
		[`btn-${color}`]: !link && !outline && !ghost && color,
		[`btn-outline-${color}`]: !link && outline && color,
		[`btn-ghost-${color}`]: !link && ghost && color,
		[`btn-${size}`]: !link && size,
		[`btn-${icon}`]: icon,
		'btn-icon': iconButton,
		'btn-square': !link && square,
		'btn-pill': !link && pill,
		'btn-loading': !link && loading,
		'btn-link': link,
		'disabled': !link && disabled,
		'w-100': block,
		'active': active,
		[className]: className,
	})
</script>

{#if visible}
	{#if href}
		<a class={classes} {disabled} role="button" {href} on:click {...$$restProps}>
			<slot />
		</a>
	{:else}
		<button type="button" class={classes} {disabled} on:click {...$$restProps}>
			<slot />
		</button>
	{/if}
{/if}
