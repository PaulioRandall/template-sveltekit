<script>
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	import '../app.css'
</script>

<div class="page">
	<Header />
	
	<div class="page-content">
		<slot />
	</div>

	<Footer />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;

		width: 100vw;
		min-height: 100vh;
	}

	.page-content {
		flex-grow: 1;
	}
</style>
