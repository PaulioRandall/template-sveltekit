<header>
	<nav class="side-element">
		<a href="/">Home</a>
	</nav>
	<div>&lt;header&gt;</div>
	<div class="side-element" />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;

		width: 100%;
		padding: var(--space-sm);
	
		background: var(--cotheme-bg);
		border-bottom: 1px solid var(--cotheme-border);
	}

	a {
		color: var(--cotheme-text);
	}

	.side-element {
		width: 6ch; 
	}
</style>
