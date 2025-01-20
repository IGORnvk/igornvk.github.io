<script lang="ts">
  import { HTML } from "@threlte/extras";
  import { onMount } from "svelte";
  import { useThrelte } from "@threlte/core";
  import { Group } from "three";
  import { dialogWindow } from "$lib/stores";
  import "augmented-ui/augmented-ui.min.css";

  export const ref = new Group();
  const { camera } = useThrelte();

  onMount(() => {
    camera.current.add(ref);
    ref.position.set(0, 0, -55);
  });

  $dialogWindow = ref;
</script>

<HTML
  {ref}
  transform
>
<div class="w-8 h-1 bg-main absolute top-0.5 z-10"></div>
<div class="w-8 h-1 bg-main absolute top-0.5 z-10 -right-0"></div>
<div class="w-8 h-1 bg-main absolute bottom-0.5 z-10"></div>
<div class="w-8 h-1 bg-main absolute bottom-0.5 z-10 right-0"></div>
  <div
    data-augmented-ui="both"
    class="inline-block w-auto max-w-3xl p-7 font-bold sm:text-xl text-main uppercase"
    style="
          --aug-inlay-bg: #082f49;
          --aug-border-bg: #4cd0fc;
          --aug-inlay-opacity: 0.5;
          --aug-inlay-all: 0px;
          --aug-border: initial;
          --aug-border-y: 2px;
          --aug-border-x: 0px;
          "
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
</HTML>
