<script lang="ts">
	export let footer: string = ''
</script>

<div class="card-footer">
	<!-- TODO: not standard -->
	<div class="row d-flex align-items-center">
		{#if footer}
			<div class="col-auto">
				{footer}
			</div>
		{/if}
		<div class="col-auto ms-auto">
			<slot />
		</div>
	</div>
</div>
