<script>
	import NavLink from '$lib/components/NavLink.svelte';

    export let showContent = false;

    function displayContent() {
        setTimeout(() => {
            showContent = true;
        }, 500)
    }
</script>

<nav class="slide-in bg-gray-900 text-white text-2xl py-10 uppercase tracking-widest" on:animationend={displayContent}>
	<div class="flex justify-between items-center gap-14 w-1/2 mx-auto">
		<NavLink link="#about" title="About me" />
		<NavLink link="#skills" title="Skills" />
		<a href="#home" class="">
			<img src="./src/img/clover.png" alt="clover" class="object-scale-down h-14 w-14" />
		</a>
		<NavLink link="#projects" title="Projects" />
		<NavLink link="#contact" title="Contact" />
	</div>
</nav>

{#if showContent}
    <slot />
{/if}

<style lang="postcss">
	.slide-in {
		animation: slideInFromTop 1s ease-out forwards;
	}

	@keyframes slideInFromTop {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
