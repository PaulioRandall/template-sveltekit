<script>
	import { page } from '$app/stores'
</script>

<main>
	<h1>{$page.status}</h1>
	<p class="center">
		{$page.error.message}
	</p>
</main>

<style>
	.center {
		text-align: center;
	}
</style>
