<script lang="ts">
  import { focusObjectRegistry } from '$lib/focusObjects';
  import { activeFocusObjectId } from '$lib/stores';

  $: activeConfig = $activeFocusObjectId ? focusObjectRegistry[$activeFocusObjectId] : null;
</script>

{#if activeConfig && !activeConfig.alwaysVisible}
  <svelte:component this={activeConfig.contentComponent} objectId={activeConfig.id} />
{/if}
