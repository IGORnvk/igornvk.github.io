<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import { cameraControls } from "$lib/stores";

  let camera;

  $: if ($cameraControls) {
    camera = $cameraControls._camera;
  }
</script>

<div>
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
  }
</style>
