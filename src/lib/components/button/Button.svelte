<script lang="ts">
	import type { Colors } from '$lib/types/colors';
	import { shareProperty } from '$lib/utils';

	import clsx from 'clsx';

	/**
	 * TODO
	 */
	export let block: boolean = false;

	/**
	 * TODO
	 */
	export let color: Colors = 'primary';

	/**
	 * TODO
	 */

	export let disabled: boolean = false;

	/**
	 * TODO
	 */
	export let link: boolean = false;

	/**
	 * TODO
	 */
	export let loading: boolean = false;

	/**
	 * TODO
	 */
	export let outline: boolean = false;

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md';

	/**
	 * TODO
	 */
	export let skeleton: boolean = false;

	/**
	 * TODO
	 */
	export let visible: boolean = true;

	/**
	 * TODO
	 */
	export let to: string = '';

	$: classes = clsx('u-btn', {
		btn: !link,
		[`btn-${color}`]: !link && !outline && color,
		[`btn-outline-${color}`]: !link && outline && color,
		[`btn-${size}`]: !link && size,
		'btn-loading': !link && loading,
		'btn-block': !link && block,
		disabled: !link && disabled
	});

	$: skeleton_ = shareProperty('skeleton', skeleton);
</script>

{#if visible}
	{#if to}
		<!-- <Link class={classes} {disabled} role="button" {to} type="button" on:click {...$$restProps}>
			<slot />
		</Link> -->
	{:else}
		<button class={classes} {disabled} on:click {...$$restProps}>
			<slot />
		</button>
	{/if}
{/if}
