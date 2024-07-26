<script>
	import HorizontalBorder from '$lib/components/HorizontalBorder.svelte';
	import VerticalBorder from '$lib/components/VerticalBorder.svelte';

	// variables for managing popup
	export let showPopup = false;
	let isClosing = false;

	/**
	 * Handle closing of the popup
	 */
	function close() {
		isClosing = true;
		setTimeout(() => {
			showPopup = false;
			isClosing = false;
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
	<div class="popup-container">
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
					class="flex gap-1 justify-center items-center py-1 px-2 bg-popup hover:cursor-pointer self-end text-white font-bold custom-button active:bg-blue-700"
					on:click={close}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-5 p-0.5 bg-cyan-600 rounded-xl"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
						/>
					</svg>
					OK
				</div>
			</div>
		</div>
	</div>

	<style lang="postcss">
		.popup-container {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
			overflow: hidden;
		}

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

		.custom-button {
			position: relative;
			overflow: visible;
		}

		.custom-button::after {
			content: '';
			position: absolute;
			bottom: -4px;
			left: 0;
			height: 2px;
			width: 0;
			background-color: #4cd0fc;
			transition: width 0.3s ease-out;
		}

		.custom-button:hover::after {
			width: 100%;
		}
	</style>
{/if}

<svelte:window on:keydown={onKeyDown} />
