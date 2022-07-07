<script type="ts">
	import { Container } from '../grid'
	import { setContext } from 'svelte'
	import clsx from 'clsx'
	setContext('navbar', {
		inNavbar: true,
	})
	let className = ''
	export { className as class }
	export let container: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' = false
	export let color = ''
	export let dark = false
	export let expand: boolean | string = false
	export let fixed = ''
	export let light = false
	export let navbar = true
	export let sticky = ''

	function getExpandClass(expand: boolean | string) {
		if (expand === false) {
			return false
		} else if (expand === true || expand === 'xs') {
			return 'navbar-expand'
		}
		return `navbar-expand-${expand}`
	}
	$: classes = clsx(className, getExpandClass(expand), {
		'navbar': navbar,
		'navbar-light': light,
		'navbar-dark': dark,
		[`bg-${color}`]: color,
		[`fixed-${fixed}`]: fixed,
		[`sticky-${sticky}`]: sticky,
	})
</script>

<nav {...$$restProps} class={classes}>
	{#if container}
		<Container
			fluid={container === 'fluid'}
			sm={container === 'sm'}
			md={container === 'md'}
			lg={container === 'lg'}
			xl={container === 'xl'}
			xxl={container === 'xxl'}>
			<slot />
		</Container>
	{:else}
		<slot />
	{/if}
</nav>
