<script lang="ts">
	export let footer: string = ''
</script>

<div class="card-footer">
	{#if footer}
		{footer}
	{/if}

	<slot />
</div>
