<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras'
  import MediumIsland from './models/MediumIsland.svelte';
  import LargeIsland from './models/LargeIsland.svelte';
  import Tree from './models/Tree.svelte';
  import LargeRock from './models/LargeRock.svelte';
  import SmallRock from './models/SmallRock.svelte';
  import WoodenSign from './models/WoodenSign.svelte';
  import Grass from './models/Grass.svelte';
  import Fire from './models/Fire.svelte';
  import Campfire from './models/Campfire.svelte';
  import Grass1 from './models/Grass1.svelte';
    import StartingIsland from './StartingIsland.svelte';

  const heightForItems = 1.4;
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 7, 7]}
  fov={14}
>
  <OrbitControls
    enableZoom
    enableDamping
    zoomSpeed={3}
    target.y={1.7}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position.x={5}
  position.y={10}
/>

<T.AmbientLight intensity={0.5} />

<Grid
  position.y={-0.001}
  cellColor="#87CEEB"
  sectionColor="#87CEEB"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<Float
  floatIntensity={1}
  floatingRange={[0, 0.3]}
>
  <StartingIsland />
</Float>
