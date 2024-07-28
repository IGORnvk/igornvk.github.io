<script>
	export let link;
	export let title;
</script>

<a href={link} class="nav-link hover:text-main transition-colors duration-300 relative">
	{title}
</a>

<style lang="postcss">
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 50%;
		width: 0;
		height: 2px;
		background-color: #4cd0fc;
		transition:
			width 0.3s ease-out,
			left 0.3s ease-out;
	}

	.nav-link:hover::after {
		width: 100%;
		left: 0;
	}
</style>
