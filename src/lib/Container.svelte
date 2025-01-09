<script>
	let {
		type = 'fit',
		tag = 'div',
		layout = '',
		rest,
	} = $props()
</script>

<svelte:element
	this={tag}
	class="container"
	class:fit={type==='fit'}
	class:wrap={layout==='wrap'}
	class:vert={layout==='vert' || layout==='vertical'}
	{...rest}>
	<slot />
</svelte:element>

<style>
	.container {
		container: layout-container / inline-size;
		display: flex;
		gap: 1rem;
	}

	.fit :global(*) {
		flex-grow: 1;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.vert {
		flex-direction: column;
	}

	@container layout-container (width > 300px) {
	  .container :global(*) {

	  }
	}
</style>
