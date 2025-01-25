<script lang="ts">
  import { heightForItems, mesh } from "$lib/stores";
  import LargeIsland from "./models/LargeIsland.svelte";
  import Tree from "./models/Tree.svelte";
  import SmallRock from "./models/SmallRock.svelte";
  import Grass1 from "./models/Grass1.svelte";
  import Tent from "./models/Tent.svelte";
  import StructureRoof from "./models/StructureRoof.svelte";
  import Bedroll1 from "./models/Bedroll1.svelte";
  import Campfire from "./models/Campfire.svelte";

  const treeSettings = [
    { scale: 1, x: 0.1, y: $heightForItems, z: 0.5 },
    { scale: 0.7, x: 0.2, y: $heightForItems, z: 0.2 },
    { scale: 1.3, x: 0.3, y: $heightForItems, z: -0.1 },
  ];

  const grassCoords = [
    { x: 0.1, y: $heightForItems, z: 0.35 },
    { x: 0.3, y: $heightForItems, z: -0.05 },
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

<StructureRoof
  scale={0.3}
  position.x={-0.2}
  position.y={$heightForItems}
  position.z={-0.47}
  rotation.y={-1}
/>

<Campfire
  scale={0.3}
  position.x={-0.2}
  position.y={$heightForItems}
  position.z={-0.47}
  rotation.y={0.2}
/>

<Tent
  scale={0.4}
  position.x={0.3}
  position.y={$heightForItems}
  position.z={-0.4}
  rotation.y={0.8}
/>

<Bedroll1
  scale={0.4}
  position.x={0.3}
  position.y={$heightForItems}
  position.z={-0.4}
  rotation.y={0.8}
/>
