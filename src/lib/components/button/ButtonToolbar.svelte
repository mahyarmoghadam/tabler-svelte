<script>
	import clsx from 'clsx'

	let className = ''
	export { className as class }
	$: classes = clsx(className, 'btn-toolbar')
</script>

<div {...$$restProps} role="toolbar" class={classes}>
	<slot />
</div>
