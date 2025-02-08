<script lang="ts">
  import { T, useFrame } from "@threlte/core";
  import {
    ContactShadows,
    Grid,
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
  import DialogPopup from "./DialogPopup.svelte";
  import DialogPopupHidden from "./DialogPopupHidden.svelte";

  useFrame(() => {
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

<GhostCompanion 
  scale={0.1}
/>

<DialogPopup />

<DialogPopupHidden />

<StartingIsland />

<GrassPlatform
  scale={0.7}
  position.x={0.3}
  position.y={1.15}
  position.z={-1.1}
/>

<GrassPlatform
  scale={0.7}
  position.x={0.4}
  position.y={1.15}
  position.z={-1.9}
/>

<ProjectsIsland />

<GrassPlatform
  scale={0.7}
  position.x={1.9}
  position.y={1.15}
  position.z={-2.3}
/>

<GrassPlatform
  scale={0.7}
  position.x={2.7}
  position.y={1.15}
  position.z={-1.9}
/>

<SkillsIsland />

<GrassPlatform
  scale={0.7}
  position.x={4}
  position.y={1.15}
  position.z={-2.7}
/>

<GrassPlatform
  scale={0.7}
  position.x={4}
  position.y={1.15}
  position.z={-3.5}
/>

<ContactIsland />
