<script lang="ts">
	import clsx from 'clsx'

	type size =
		| 'auto'
		| '1'
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		| '10'
		| '11'
		| '12'
		| undefined

	export let justifyContent:
		| 'start'
		| 'center'
		| 'end'
		| 'around'
		| 'between'
		| 'evenly'
		| undefined = undefined

	export let alignItems:
		| 'start'
		| 'center'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'stretch'
		| undefined = undefined

	export let g: size | undefined = undefined

	export let className: string = ''

	$: classes = clsx('row', {
		[`g-${g}`]: !!g,
		[`justify-content-${justifyContent}`]: !!justifyContent,
		[`align-items-${alignItems}`]: !!alignItems,
		[className]: className,
	})
</script>

<div class={classes}>
	<slot />
</div>
