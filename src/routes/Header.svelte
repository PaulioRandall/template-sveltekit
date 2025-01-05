<script>
	const navLinks = [
		{
			href: '/',
			text: 'Home',
		},
		{
			href: '/copyright',
			text: 'Copyright',
		},
		{
			href: '/error',
			text: 'Error',
		},
	]
</script>

<header id="header" class="header">
	<nav class="nav">
		{#each navLinks as { href, text }}
			<a class="link" {href}>
				{text}
			</a>
		{/each}
	</nav>
</header>

<style>
	.header {
		width: 100%;
		padding-top: $space.xl;
	}

	.nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: $space.xl;

		padding: $space.md 0;
	}

	@media only screen and (min-width: 500px) {
		.nav {
			flex-direction: row;
			gap: $space.md;
		}
	}
</style>
