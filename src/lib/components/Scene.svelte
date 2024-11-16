<script lang="ts">
  import { T } from "@threlte/core";
  import { ContactShadows, Float, Grid, OrbitControls, Sky } from "@threlte/extras";
  import StartingIsland from "./StartingIsland.svelte";
</script>

<T.PerspectiveCamera makeDefault position={[-10, 5, 7]} fov={10}>
  <OrbitControls enableZoom enableDamping zoomSpeed={3} target.y={1.7} />
</T.PerspectiveCamera>

<Sky />

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />

<T.AmbientLight intensity={0.5} />

<Grid
  position.y={-0.001}
  cellColor="#87CEEB"
  sectionColor="#87CEEB"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={1}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

<Float floatIntensity={1} floatingRange={[0, 0.3]}>
  <StartingIsland />
</Float>
