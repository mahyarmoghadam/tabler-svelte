<script lang="ts">
	import CardActions from './CardActions.svelte'
	import CardTitle from './CardTitle.svelte'
	export let title: string = ''
</script>

<div class="card-header">
	<CardTitle>
		<slot name="title">
			{title}
		</slot>
	</CardTitle>
	<CardActions>
		<slot name="actions" />
	</CardActions>
</div>
