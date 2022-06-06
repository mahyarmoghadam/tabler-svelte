<script lang="ts">
	import './global.scss';
	import { Router, Link, Route } from 'svelte-routing';
	import Home from './routes/home.svelte';
	import About from './routes/about.svelte';

	export let url = '';
</script>

<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
	</nav>
	<div>
		<Route path="about" component={About} />
		<Route path="/"><Home /></Route>
	</div>
</Router>
