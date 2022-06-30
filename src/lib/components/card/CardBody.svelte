<script lang="ts">
	import CardTitle from './CardTitle.svelte'
	export let title: string = ''
	export let textMuted: boolean = false
</script>

<div class="card-body">
	{#if title}
		<CardTitle>
			<slot name="title">
				{title}
			</slot>
		</CardTitle>
	{/if}

	{#if textMuted}
		<p class="text-muted">
			<slot />
		</p>
	{:else}
		<slot />
	{/if}
</div>
