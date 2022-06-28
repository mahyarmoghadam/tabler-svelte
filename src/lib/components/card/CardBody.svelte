<script lang="ts">
	import CardTitle from './CardTitle.svelte'
	export let title: string = ''
</script>

<div class="card-body">
	{#if title}
		<CardTitle>
			<slot name="title">
				{title}
			</slot>
		</CardTitle>
	{/if}
	<slot />
</div>
