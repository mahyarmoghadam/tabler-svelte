<script lang="ts">
	export let subtitle: string =''
</script>

<h3 class="card-title">
	<slot />
	{#if subtitle}
		<span class="card-subtitle">{subtitle}</span>
	{/if}
</h3>
