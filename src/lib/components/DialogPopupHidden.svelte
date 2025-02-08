<script lang="ts">
  import { showDialogWindow } from "$lib/dialogHelpers";
  import { useThrelte } from "@threlte/core";
  import { HTML } from "@threlte/extras";
  import { onMount } from "svelte";
  import { Group } from "three";

  export const ref = new Group();
  const { camera } = useThrelte();

  onMount(() => {
    camera.current.add(ref);
    ref.position.set(0, 0, -55);

    // Cleanup logic for animations.
    const container = document.getElementById('dialogWindowContainerHidden');
    container?.addEventListener('animationend', (event) => {
      if (event.animationName === 'appear') {
        container.classList.remove('animate-appear');
      } else if (event.animationName === 'disappear') {
        container.classList.add('hidden');
        container.classList.remove('animate-disappear');
      }
    });
  });
</script>

<HTML
  {ref}
  transform
  sprite
  >
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={() => {showDialogWindow()}}
    id="dialogWindowContainerHidden"
    data-augmented-ui="both tl-clip br-clip-x tr-clip bl-clip"
    class="hidden fixed -bottom-[88vh] sm:-bottom-[61vh] w-64 sm:w-96 px-7 pb-7 pt-10 "
    style="
          --aug-inlay-bg: #172554;
          --aug-border-bg: #4cd0fc;
          --aug-inlay-opacity: 0.5;
          --aug-inlay-all: 0px;
          --aug-border: initial;
          --aug-border-y: 2px;
          --aug-border-x: 0px;
          "
  ></div>
</HTML>
