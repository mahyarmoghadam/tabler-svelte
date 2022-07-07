<script type="ts">
	import clsx from 'clsx'

	let className = ''
	export { className as class }
	export let disabled = false
	export let active = false
	export let href = '#'
	$: classes = clsx(className, 'nav-link', {
		disabled,
		active,
	})
	function handleClick(e: Event) {
		if (disabled) {
			e.preventDefault()
			e.stopImmediatePropagation()
			return
		}
		if (href === '#') {
			e.preventDefault()
		}
	}
</script>

<a {...$$restProps} {href} on:click on:click={handleClick} class={classes}>
	<slot />
</a>
