<script>
	import Popup from "$lib/components/Popup.svelte";
	import { onMount } from "svelte";

    let showPopup = false;

    onMount(() => {
        setTimeout(() => {
            showPopup = true;
        }, 500);
    });
</script>

<Popup bind:showPopup>
    <p slot="header">Unauthorized access</p>
    <p slot="description">You are not permitted to access this environment.</p>
</Popup>

