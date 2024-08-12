<script>
	import NavLink from '$lib/components/NavLink.svelte';

    export let showContent = false;

    function displayContent() {
        setTimeout(() => {
            showContent = true;
        }, 1000)
    }
</script>

<div class="relative">
<nav class="slide-in bg-gray-900 py-6 mb-8 text-white text-2xl uppercase tracking-widest" on:animationend={displayContent}>
	<div class="flex justify-between items-center gap-14 w-1/2 mx-auto">
		<NavLink link="#about" title="About me" />
		<NavLink link="#skills" title="Skills" />
		<a href="#home" class="">
			<img src="./src/img/clover.png" alt="clover" class="object-scale-down h-14 w-14 cursor-main" />
		</a>
		<NavLink link="#projects" title="Projects" />
		<NavLink link="#contact" title="Contact" />
	</div>
</nav>

<div class="nav-line"></div>
</div>

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

	.nav-line {
        position: absolute;
        top: 100%; /* Position the line right below the nav */
        left: 50%;
        height: 0.5px; /* Thickness of the line */
        background-color: white;
        transform: translateX(-50%); /* Ensure the line starts from the middle */
        transform-origin: center; /* Set the origin for the animation */
        width: 0; /* Start with a width of 0 */
        animation: drawLine 1.5s ease-out forwards; /* Animate the line drawing */
        animation-delay: 1.2s; /* Delay to start after the nav animation */
    }

    @keyframes drawLine {
        to {
            width: 100%; /* Extend the line to the edges of the screen */
        }
    }
</style>
