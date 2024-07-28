<div class="relative w-full h-full flex flex-col gap-8 justify-center items-center danger-sign">
    <img src="./src/img/warning.png" class="  sm:h-5/12 sm:w-1/6" alt="warning" />
    <p class="text-secondary uppercase font-bold text-2xl sm:text-3xl">Initializing restart</p>
</div>

<style lang="postcss">
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
	.danger-sign {
		animation: blink 1s step-start 0.5s infinite;
	}
</style>
