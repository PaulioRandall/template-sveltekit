<script>
</script>

<main>
	<h1>Minimalist Sveltekit Template</h1>

	<section>
		<h2>A heading</h2>
		<p>A paragraph...</p>
	</section>

	<section>
		<div class="rect fmt-px"/>
		<div class="rect fmt-em"/>
		<div class="rect fmt-rem"/>
		<div class="rect fmt-pt"/>
		<div class="rect fmt-pc"/>
		<div class="rect fmt-in"/>
		<div class="rect fmt-cm"/>
		<div class="rect fmt-mm"/>
	</section>
</main>

<style>
	.rect {
		color: white;
		background: royalblue;
		text-align: center;
	}

	.fmt-px {
		width: $space.xl(px);
		&:after {
			content: '$space.xl(px)'
		}
	}

	.fmt-em {
		width: $space.xl(em);
				&:after {
			content: '$space.xl(em)'
		}
	}

	.fmt-rem {
		width: $space.xl(rem);
		&:after {
			content: '$space.xl(rem)'
		}
	}

	.fmt-pt {
		width: $absSpace.xl(pt);
		&:after {
			content: '$absSpace.xl(pt)'
		}
	}

	.fmt-pc {
		width: $absSpace.xl(pc);
	&:after {
			content: '$absSpace.xl(pc)'
		}
	}

	.fmt-in {
		width: $absSpace.xl(in);
	&:after {
			content: '$absSpace.xl(in)'
		}
	}

	.fmt-cm {
		width: $absSpace.xl(cm);
	&:after {
			content: '$absSpace.xl(cm)'
		}
	}

	.fmt-mm {
		width: $absSpace.xl(mm);
	&:after {
			content: '$absSpace.xl(mm)'
		}
	}
</style>
