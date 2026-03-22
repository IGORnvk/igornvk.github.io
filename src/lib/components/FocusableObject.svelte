<script lang="ts">
  import { T } from '@threlte/core';
  import { focusObjectRegistry } from '$lib/focusObjects';
  import { canFocusObject, enterFocusObject } from '$lib/focusObjectHelpers';
  import type { FocusObjectId } from '$lib/stores';
  import type { Snippet } from 'svelte';

  let {
    objectId,
    children
  }: {
    objectId: FocusObjectId
    children?: Snippet
  } = $props();

  const getConfig = () => focusObjectRegistry[objectId];

  const handleClick = () => {
    if (!canFocusObject(objectId)) return;
    void enterFocusObject(objectId);
  };
</script>

<T.Group>
  {@render children?.()}

    <T.Mesh
    position={getConfig().hitboxPosition ?? [0, 0, 0]}
    rotation={getConfig().hitboxRotation ?? [0, 0, 0]}
    onclick={handleClick}
  >
    <T.BoxGeometry args={getConfig().hitboxSize} />
    <T.MeshBasicMaterial transparent opacity={0} depthWrite={false} />
  </T.Mesh>
</T.Group>
