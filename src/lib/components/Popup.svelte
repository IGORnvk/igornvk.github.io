<script>
	import HorizontalBorder from '$lib/components/HorizontalBorder.svelte';
	import VerticalBorder from '$lib/components/VerticalBorder.svelte';

	export let showPopup = false;

	function close() {
		showPopup = false;
	}
</script>

{#if showPopup}
	<div class="flex gap-1 relative mx-auto max-w-md font-orbitron">
		<VerticalBorder />
		<div class="border border-blue-500 p-0.5 flex flex-col">
			<div class="bg-white p-7 rounded-md">
				<h1 class="font-bold text-xl">Unauthorized access</h1>
				<HorizontalBorder />
				<p>You are not permitted to access this environment.</p>
			</div>
			<button
				class="mr-8 mb-2 py-1 px-4 bg-blue-500 hover:cursor-pointer self-end text-white custom-button active:bg-blue-700"
				on:click={close}
			>
				Ok
			</button>
			<div class="pl-1 text-xs text-blue-500">
				<p>!*^$#^&?@_</p>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.custom-button {
		position: relative;
		overflow: visible;
	}

	.custom-button::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		height: 1.5px;
		width: 0;
		background-color: #3b82f6;
		transition: width 0.3s ease-out;
	}

	.custom-button:hover::after {
		width: 100%;
	}
</style>
