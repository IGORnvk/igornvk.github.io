<script lang="ts">
  import { T } from "@threlte/core";
  import { Text3DGeometry, Suspense, HTML } from "@threlte/extras";
  import heightForItems from "$lib/heightForItems";
  import LargeIsland from "./models/LargeIsland.svelte";
  import Tree from "./models/Tree.svelte";
  import SmallRock from "./models/SmallRock.svelte";
  import WoodenSign from "./models/WoodenSign.svelte";
  import Grass1 from "./models/Grass1.svelte";
  import FishingStand from "./models/FishingStand.svelte";
    import SignpostSingle from "./models/SignpostSingle.svelte";
    import WoodenSign1 from "./models/WoodenSign1.svelte";

  const treeSettings = [
    { scale: 1, x: 0.2, y: $heightForItems, z: -0.5 },
    { scale: 0.7, x: 0, y: $heightForItems, z: -0.3 },
    { scale: 1.3, x: 0.3, y: $heightForItems, z: -0.1 },
  ];

  const grassCoords = [
    { x: -0.1, y: $heightForItems, z: -0.35 },
    { x: 0.2, y: $heightForItems, z: -0.1 },
  ];
</script>

<LargeIsland />

{#each treeSettings as tree}
  <Tree
    scale={tree.scale}
    position.x={tree.x}
    position.y={tree.y}
    position.z={tree.z}
  />
{/each}

{#each grassCoords as grass}
  <Grass1 position.x={grass.x} position.y={grass.y} position.z={grass.z} />
{/each}

<SmallRock
  scale={0.4}
  position.x={0.4}
  position.y={$heightForItems}
  position.z={0.2}
/>

<FishingStand
  scale={0.8}
  position.x={0.1}
  position.y={$heightForItems}
  position.z={0.4}
  rotation.y={1}
/>

<T.Mesh
  position.y={$heightForItems}
>
  <WoodenSign1
    scale={0.16}
    position.x={-0.1}
    rotation.y={-0.9}
  />

  <HTML transform pointerEvents="none" position.x={-0.1} position.z={0.002} position.y={0.345} rotation.y={-0.9} occlude>
    <button class="text-white" style="font-size: 1px;">Start</button>
  </HTML>
</T.Mesh>
