<script lang="ts">
  import { heightForItems } from "$lib/stores";
  import LargeIsland from "./models/LargeIsland.svelte";
  import Tent from "./models/Tent.svelte";
  import StructureRoof from "./models/StructureRoof.svelte";
  import Bedroll1 from "./models/Bedroll1.svelte";
  import Campfire from "./models/Campfire.svelte";
  import Windmill from "./models/Windmill.svelte";
  import Tulips from "./models/Tulips.svelte";
  import Grass1 from "./models/Grass1.svelte";
  import Bike from "./models/Bike.svelte";
</script>

<LargeIsland />

<Windmill
  scale={0.3}
  position.x={0.2}
  position.y={1.7}
  position.z={0.2}
  rotation.y={-1.7}
/>

<Bike
  scale={0.0008}
  position.x={0.2}
  position.y={1.4}
  position.z={-0.2}
  rotation.y={2.5}
/>

<Tulips
  scale={0.1}
  position.x={0.4}
  position.y={1.45}
  position.z={-0.2}
/>

<Tulips
  scale={0.1}
  position.x={0.2}
  position.y={1.45}
  position.z={-0.05}
/>

<Tulips
  scale={0.1}
  position.x={0.35}
  position.y={1.45}
  position.z={-0.05}
/>

<Grass1
  scale={0.4}
  position.x={0.45}
  position.y={1.4}
  position.z={0.05}
/>

<Grass1
  scale={0.4}
  position.x={0.2}
  position.y={1.4}
  position.z={-0.05}
/>

<Grass1
  scale={0.4}
  position.x={0.4}
  position.y={1.4}
  position.z={-0.1}
/>

<Grass1
  scale={0.4}
  position.x={-0.1}
  position.y={1.4}
  position.z={0.35}
/>

<Grass1
  scale={0.4}
  position.x={-0.15}
  position.y={1.4}
  position.z={0.5}
/>

<Grass1
  scale={0.4}
  position.x={0}
  position.y={1.4}
  position.z={0.5}
/>

<Tulips
  scale={0.1}
  position.x={0}
  position.y={1.45}
  position.z={0.5}
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
