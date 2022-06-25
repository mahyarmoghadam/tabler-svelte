<script lang="ts">
	import clsx from 'clsx'
	import type { Colors } from '$lib/types/colors'

	type colSize =
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

	export let col: colSize = undefined
	export let xl: colSize | boolean = undefined
	export let md: colSize = undefined
	export let sm: colSize = undefined
	export let py: colSize = undefined
	export let color: Colors | undefined = undefined
	export let samiBold: boolean = false

	$: classes = clsx(col ? `col-${col}` : 'col', {
		[`col-xl-${xl}`]: !!xl && (typeof xl == 'string'),
		[`col-md-${md}`]: !!md && (typeof md == 'string'),
		[`col-sm-${sm}`]: !!sm && (typeof sm == 'string'),

		'col-xl': !!xl && (typeof xl == 'boolean'),
		'col-md': !!md && (typeof md == 'boolean'),
		'col-sm': !!sm && (typeof sm == 'boolean'),

		[`bg-${color}`]: !!color,
		[`py-${py}`]: !!py,

		'font-weight-semibold': samiBold,
	})
</script>

<div class={classes}>
	<slot />
</div>
