<script type="ts">
	import clsx from 'clsx'

	let className = ''
	export { className as class }
	export let href = '/'
	$: classes = clsx(className, 'navbar-brand')
</script>

<a {...$$restProps} class={classes} {href} on:click>
	<slot />
</a>
Footer
