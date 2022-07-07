<script type="ts">
	import clsx from 'clsx'
	let className = ''
	export { className as class }
	export let sm: boolean | undefined = undefined
	export let md: boolean | undefined = undefined
	export let lg: boolean | undefined = undefined
	export let xl: boolean | undefined = undefined
	export let xxl: boolean | undefined = undefined
	export let fluid = false
	$: classes = clsx(className, {
		'container-sm': sm,
		'container-md': md,
		'container-lg': lg,
		'container-xl': xl,
		'container-xxl': xxl,
		'container-fluid': fluid,
		'container': !sm && !md && !lg && !xl && !xxl && !fluid,
	})
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
