<script lang="ts">
  import { T } from "@threlte/core";
  import {
    ContactShadows,
    Float,
    Grid,
    OrbitControls,
    Sky,
  } from "@threlte/extras";
  import StartingIsland from "./StartingIsland.svelte";
  import ProfileIsland from "./ProfileIsland.svelte";
  import SkillsIsland from "./SkillsIsland.svelte";
  import ProjectsIsland from "./ProjectsIsland.svelte";
  import ContactIsland from "./ContactIsland.svelte";
  import GrassPlatform from "./models/GrassPlatform.svelte";
</script>

<T.PerspectiveCamera makeDefault position={[-10, 5, 7]} fov={14}>
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

<ContactShadows scale={20} blur={2} far={2.5} opacity={0.5} />

<Float floatIntensity={1} floatingRange={[0, 0.3]}>
  <StartingIsland />

  <GrassPlatform scale={0.7} position.x={0.3} position.y={1.15} position.z={-1.1} />

  <GrassPlatform scale={0.7} position.x={0.4} position.y={1.15} position.z={-1.9} />

  <ProfileIsland />

  <SkillsIsland />

  <ProjectsIsland />

  <ContactIsland />
</Float>
