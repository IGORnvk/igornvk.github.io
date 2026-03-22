<script lang="ts">
  import { T, useTask } from "@threlte/core";
  import {
    ContactShadows,
    Grid,
    HUD,
    interactivity,
    Sky,
  } from "@threlte/extras";
  import { alwaysLookAtCamera, updateTweens } from "$lib/animationHelpers";
  import { ghostCompanion } from "$lib/stores";
  import { activateKeyListener, getDialogNumber } from "$lib/dialogHelpers";
  import { onMount } from "svelte";
  import StartingIsland from "./StartingIsland.svelte";
  import SkillsIsland from "./SkillsIsland.svelte";
  import ProjectsIsland from "./ProjectsIsland.svelte";
  import ContactIsland from "./ContactIsland.svelte";
  import GrassPlatform from "./models/GrassPlatform.svelte";
  import GhostCompanion from "./models/GhostCompanion.svelte";
  import CameraControls from "./CameraControls.svelte";
  import DialogHudScene from "./DialogHudScene.svelte";

  useTask(() => {
    updateTweens();
    
    if (getDialogNumber() > 0) alwaysLookAtCamera($ghostCompanion);
  });

  onMount(() => {
    activateKeyListener();
  });

  interactivity();
</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 5, 7]}
  fov={30}
>
  <CameraControls />
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

<GhostCompanion />

<HUD>
  <DialogHudScene />
</HUD>

<StartingIsland />

<T.Group scale={0.7} position={[0.3, 1.15, -1.1]}>
  <GrassPlatform />
</T.Group>

<T.Group scale={0.7} position={[0.4, 1.15, -1.9]}>
  <GrassPlatform />
</T.Group>

<ProjectsIsland />

<T.Group scale={0.7} position={[1.9, 1.15, -2.3]}>
  <GrassPlatform />
</T.Group>

<T.Group scale={0.7} position={[2.7, 1.15, -1.9]}>
  <GrassPlatform />
</T.Group>

<SkillsIsland />

<T.Group scale={0.7} position={[4, 1.15, -2.7]}>
  <GrassPlatform />
</T.Group>

<T.Group scale={0.7} position={[4, 1.15, -3.5]}>
  <GrassPlatform />
</T.Group>

<ContactIsland />
