<script lang="ts">
  import { T } from "@threlte/core";
  import { heightForItems } from "$lib/stores";
  import LargeIsland from "./models/LargeIsland.svelte";
  import Tent from "./models/Tent.svelte";
  import Bedroll1 from "./models/Bedroll1.svelte";
  import Campfire from "./models/Campfire.svelte";
  import Windmill from "./models/Windmill.svelte";
  import Tulips from "./models/Tulips.svelte";
  import Grass1 from "./models/Grass1.svelte";
  import Bike from "./models/Bike.svelte";
  import Chair from "./models/Chair.svelte";
  import FocusableObject from "./FocusableObject.svelte";
  import IntroBoardContent from "./focus/IntroBoardContent.svelte";
  import InfoBoard from "./models/InfoBoard.svelte";
</script>

<LargeIsland />

<T.Group scale={0.3} position={[0.2, 1.7, 0.2]} rotation={[0, -1.7, 0]}>
  <Windmill />
</T.Group>

<T.Group scale={0.17} position={[-0.2, $heightForItems, 0.3]} rotation={[0, -2.4, 0]}>
  <FocusableObject objectId="intro-board">
    <InfoBoard />
  </FocusableObject>
</T.Group>

<IntroBoardContent />

<T.Group scale={0.0008} position={[0.2, 1.4, -0.2]} rotation={[0, 2.5, 0]}>
  <Bike />
</T.Group>

<T.Group scale={0.1} position={[0.4, 1.45, -0.2]}>
  <Tulips />
</T.Group>

<T.Group scale={0.1} position={[0.2, 1.45, -0.05]}>
  <Tulips />
</T.Group>

<T.Group scale={0.1} position={[0.35, 1.45, -0.05]}>
  <Tulips />
</T.Group>

<T.Group scale={0.4} position={[0.45, 1.4, 0.05]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.4} position={[0.2, 1.4, -0.05]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.4} position={[0.4, 1.4, -0.1]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.4} position={[-0.1, 1.4, 0.35]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.4} position={[-0.15, 1.4, 0.5]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.4} position={[0, 1.4, 0.5]}>
  <Grass1 />
</T.Group>

<T.Group scale={0.1} position={[0, 1.45, 0.5]}>
  <Tulips />
</T.Group>

<T.Group scale={0.2} position={[-0.2, $heightForItems, -0.47]} rotation={[0, 0.2, 0]}>
  <Campfire />
</T.Group>

<T.Group position={[-1.3, $heightForItems, -0.7]}>
  <T.Group scale={0.003} rotation={[0, -0.7, 0]}>
    <Chair />
  </T.Group>
</T.Group>

<T.Group position={[0.45, $heightForItems, -1.38]}>
  <T.Group scale={0.003} rotation={[0, -2.7, 0]}>
    <Chair />
  </T.Group>
</T.Group>

<T.Group scale={0.4} position={[0.3, $heightForItems, -0.4]} rotation={[0, 0.8, 0]}>
  <Tent />
</T.Group>

<T.Group scale={0.4} position={[0.3, $heightForItems, -0.4]} rotation={[0, 0.8, 0]}>
  <Bedroll1 />
</T.Group>
