<script>
	import { onMount } from 'svelte';

	export let showPage = false;
	export let showLoadingBar = false;
	let showStartingPoint = false;
	let isClosing = false;

	/**
	 * Handle removing the loading bar
	 */
	function close() {
		isClosing = true;
		setTimeout(() => {
			showLoadingBar = false;
			isClosing = false;
			showPage = true;
		}, 500);
	}

	/**
	 * Remove the bar when any key was pressed
	 */
	function handleInteraction() {
		if (showStartingPoint) {
			close();
		}
	}

	onMount(() => {
		setTimeout(() => {
			const progressBar = document.getElementById('progressBar');
			const percentageText = document.getElementById('percentage');
			const loadingText = document.getElementById('loadingText');

			/**
			 * @type {number}
			 */
			let startTime;

			/**
			 * @param {number} timestamp
			 */
			function updateProgress(timestamp) {
				if (!startTime) {
					startTime = timestamp;
				}

				const elapsed = timestamp - startTime;
				const duration = 5000;
				const progress = Math.min(elapsed / duration, 1);
				const percentage = Math.round(progress * 100);

				// @ts-ignore
				percentageText.innerText = `${percentage}%`;
				// @ts-ignore
				progressBar.style.width = `${percentage}%`;

				if (progress >= 1) {
					showStartingPoint = true;
					// @ts-ignore
					loadingText.innerText = 'Completed';
				} else {
					requestAnimationFrame(updateProgress);
				}
			}

			requestAnimationFrame(updateProgress);
		}, 500);
	});
</script>

{#if showLoadingBar}
	<div class="flex flex-col justify-center items-center h-full w-full">
		<div class="{isClosing ? 'closing' : ''} w-5/6 sm:w-1/6 h-fit w-fit text-xl bar-content">
			<div class="flex justify-between text-rose-500">
				<div id="loadingText" class="tracking-widest font-thin">Restarting...</div>
				<div id="percentage" class="tracking-widest font-thin">0%</div>
			</div>
			<div class="w-full bg-gray-300 h-0.5">
				<div id="progressBar" class="bg-rose-500 h-0.5 animate-fill"></div>
			</div>
		</div>

		{#if showStartingPoint}
			<div
				class="{isClosing
					? 'closing'
					: 'starting-point'} absolute bottom-1/3 text-rose-500 text-2xl"
			>
				Press any key to continue.
			</div>
		{/if}
	</div>
{/if}

<svelte:window
	on:mousedown|preventDefault={handleInteraction}
	on:keydown|preventDefault={handleInteraction}
/>

<style lang="postcss">
	.bar-content {
		opacity: 0;
		animation: bar-appear 1s ease-out forwards;
	}

	.closing {
		animation: bar-disappear 1s ease-out forwards;
	}

	@keyframes bar-disappear {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes bar-appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fill {
		0% {
			width: 0%;
		}
		20% {
			width: 20%;
		}
		30% {
			width: 30%;
		}
		60% {
			width: 60%;
		}
		100% {
			width: 100%;
		}
	}

	.animate-fill {
		animation: fill 5.5s ease-in-out forwards;
	}

	.starting-point {
		animation: blink 2s linear infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
