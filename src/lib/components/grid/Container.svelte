<script lang="ts">
	import clsx from 'clsx'
	$: classes = clsx('container')
</script>

<div class={classes}>
	<slot />
</div>
