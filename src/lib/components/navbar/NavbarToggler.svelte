<script>
	import clsx from 'clsx'
	import { Button } from '../button'

	let className = ''
	export { className as class }
	$: classes = clsx(className, 'navbar-toggler')
</script>

<Button {...$$restProps} on:click class={classes}>
	<slot>
		<span class="navbar-toggler-icon" />
	</slot>
</Button>
