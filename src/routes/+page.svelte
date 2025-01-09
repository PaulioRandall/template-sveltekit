<script>
	import Container from '$lib/Container.svelte'
</script>

<main>
	<h1>&lt;page-title&gt;</h1>

	<Container>
		<Container>
			<div class="test"> </div>
			<div class="test"> </div>		
		</Container>
			<Container>
			<div class="test"> </div>
			<div class="test"> </div>		
		</Container>
	</Container>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}

	.test {
		background: lightblue;
		height: 50px;
	}
</style>
