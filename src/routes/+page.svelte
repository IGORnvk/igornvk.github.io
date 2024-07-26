<script>
	import LoadingBar from '$lib/components/LoadingBar.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import { onMount } from 'svelte';

	let showPopup = false;
	let showLoadingBar = false;
    let showPage = false;

	onMount(() => {
		setTimeout(() => {
			showPopup = true;
		}, 500);
	});
</script>

<Popup bind:showPopup bind:showLoadingBar>
	<p slot="header">Unauthorized access</p>
	<p slot="description">You are not permitted to access this environment.</p>
</Popup>

{#if showLoadingBar}
	<LoadingBar bind:showLoadingBar bind:showPage />
{/if}

{#if showPage}
    <p class="text-white">Ihor Novikov</p>
{/if}
