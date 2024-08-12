<script>
	import DangerSign from '$lib/components/DangerSign.svelte';
	import LoadingBar from '$lib/components/LoadingBar.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import { onMount } from 'svelte';

	let showPopup = false;
	let showErrors = false;
	let showDanger = false;
	let showLoadingBar = false;
	let showNavBar = false;
	let showContent = false;

	const errorDescriptions = [
		{
			title: 'ACCESS DENIED',
			description:
				'CyberNet Security Override Detected. Unauthorized personnel cannot breach this firewall. Retreat immediately.',
			posX: '120%',
			posY: '20%'
		},
		{
			title: 'SYSTEM BREACH BLOCKED',
			description:
				'Security Protocol: SilverGuard. Your access attempt has been logged and traced. Leave the system or face consequences.',
			posX: '-100%',
			posY: '30%'
		},
		{
			title: 'ERROR: INVALID KEY',
			description:
				'The decryption key entered is corrupted or compromised. Verification failed. Please acquire a valid key to proceed.',
			posX: '50%',
			posY: '100%'
		},
		{
			title: 'RESTRICTED ZONE',
			description:
				'You’ve entered a high-security area. Access is restricted to elite operatives only. Return to authorized paths.',
			posX: '20%',
			posY: '-120%'
		},
		{
			title: 'ERROR CODE: NULL_ACCESS',
			description:
				'Data stream blocked by a rogue AI. Unauthorized access attempt detected. Contact system admin for clearance.',
			posX: '-10%',
			posY: '-40%'
		},
		{
			title: 'FIREWALL ENGAGED',
			description:
				'Intrusion detected. The system’s firewall has been activated to prevent data breach. Disconnect immediately.',
			posX: '-30%',
			posY: '80%'
		},
		{
			title: 'SECURITY ALERT',
			description:
				'Multiple failed access attempts detected. CyberSec drones are on high alert. This is your final warning.',
			posX: '80%',
			posY: '-20%'
		}
	];

	let popupsState = new Array(Object.keys(errorDescriptions).length).fill(false);

	onMount(() => {
		setTimeout(() => {
			showPopup = true;
		}, 500);
	});

	function showErrorPopups() {
		Object.keys(errorDescriptions).forEach((_, index) => {
			setTimeout(() => {
				popupsState[index] = true;
				if (index == errorDescriptions.length - 1) {
					setTimeout(() => {
						showDanger = true;
					}, 1000);

					setTimeout(() => {
						showDanger = false;
						setTimeout(() => {
							showLoadingBar = true;
						}, 1000);
					}, 6000);
				}
			}, index * 300);
		});
	}

	$: if (showErrors) {
		showErrorPopups();
	}
</script>

<Popup bind:showPopup bind:showErrors>
	<p slot="header">Unauthorized access</p>
	<p slot="description">You are not permitted to access this environment.</p>
	<svg
		slot="icon"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-5 p-0.5 bg-main rounded-xl"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
		/>
	</svg>

	<p slot="buttonText" class="uppercase text-secondary">ok</p>
</Popup>

{#if showErrors}
	{#each errorDescriptions as { title, description, posX, posY }, i}
		{#if popupsState[i]}
			<Popup {posX} {posY}>
				<p slot="header">{title}</p>
				<p slot="description">{description}</p>
			</Popup>
		{/if}
	{/each}
{/if}

{#if showErrors && showDanger}
	<DangerSign />
{/if}

{#if showLoadingBar}
	<LoadingBar bind:showLoadingBar bind:showNavBar />
{/if}

{#if showNavBar}
	<NavBar bind:showContent />
{/if}

{#if showContent}
	<div class="appear w-full h-1/2 flex justify-center text-white">
		<div class="grid grid-cols-2 grid-rows-2 content-end text-9xl tracking-wider uppercase">
			<p class="place-self-end">Ihor</p>
			<div class="self-end flex flex-col text-2xl">
				<p>fullstack</p>
				<p>software engineer</p>
			</div>
			<div class="place-self- self-start flex flex-col items-end justify-start text-2xl">
				<p>based in</p>
				<p>the Netherlands</p>
			</div>
			<p class="col-start-2 row-start-2">Novikov</p>
		</div>
	</div>
{/if}
