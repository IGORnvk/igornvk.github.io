<script>
	import HorizontalBorder from '$lib/components/HorizontalBorder.svelte';
	import VerticalBorder from '$lib/components/VerticalBorder.svelte';

	// variables for managing popup
	export let showPopup = false;
	export let showLoadingBar = false;
	let isClosing = false;

	/**
	 * Handle closing of the popup
	 */
	function close() {
		isClosing = true;
		setTimeout(() => {
			showPopup = false;
			isClosing = false;
			showLoadingBar = true;
		}, 500);
	}

	/**
	 * Handle closing of the popup when 'Enter' key is pressed
	 *
	 * @param {{ key: string; }} event
	 */
	function onKeyDown(event) {
		if (event.key == 'Enter') {
			close();
		}
	}
</script>

{#if showPopup}
	<div class="fixed top-0 left-0 flex w-full h-full justify-center items-center overflow-hidden">
		<div class="popup-content {isClosing ? 'closing' : ''} flex gap-1 relative mx-auto max-w-md">
			<VerticalBorder />
			<img
				src="/src/img/popup-interference.png"
				class="object-scale-down self-start absolute ml-4 h-4 -top-2"
				alt="interference"
			/>
			<div class="flex flex-col gap-2">
				<div
					class="border-2 border-popup p-0.5 flex flex-col bg-gradient-to-r from-indigo-600 to-indigo-800 text-white"
				>
					<div class="p-7 rounded-md">
						<div class="font-bold text-xl text-popup">
							<slot name="header" />
						</div>
						<HorizontalBorder />
						<slot name="description" />
					</div>
					<div class="pl-1 text-xs text-popup">
						<p>!*^$#^&?@_</p>
					</div>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="submit-button box-border flex gap-1 justify-center items-center after:bg-popup relative overflow-visible py-1 px-2 bg-gradient-to-r from-indigo-600 to-indigo-800 border-2 border-popup hover:cursor-pointer self-end font-bold active:bg-blue-700"
					on:click={close}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-5 p-0.5 bg-popup rounded-xl"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
						/>
					</svg>
					<p class="uppercase text-rose-500">ok</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style lang="postcss">
	.popup-content {
		transform: translateY(100vh) scaleX(0);
		opacity: 0;
		animation: popup-appear 0.5s ease-out forwards;
	}

	.closing {
		animation: popup-disappear 0.5s ease-out forwards;
	}

	@keyframes popup-appear {
		from {
			transform: translateY(100vh) scaleX(0);
			opacity: 0;
		}
		to {
			transform: translateY(0) scaleX(1);
			opacity: 1;
		}
	}

	@keyframes popup-disappear {
		from {
			transform: translateY(0) scaleX(1);
			opacity: 1;
		}
		to {
			transform: translateY(100vh) scaleX(0);
			opacity: 0;
		}
	}

	.submit-button::after {
		content: '';
		position: absolute;
		bottom: -7px;
		height: 2px;
		width: 0;
		transition: width 0.3s ease-out;
	}

	.submit-button:hover::after {
		width: 100%;
	}
</style>
