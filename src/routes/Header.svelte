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
		padding-top: var(--space-xs);
	}

	.nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: var(--space-xs);

		padding: var(--space-xs) 0;
	}

	@media only screen and (min-width: $width.xs) {
		.nav {
			flex-direction: row;
			gap: var(--space-sm);
		}
	}
</style>
