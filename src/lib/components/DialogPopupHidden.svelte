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
    ref.position.set(0, -14.5, -55);

    const container = document.getElementById('dialogWindowContainerHidden');
    const viewportDiff = window.innerHeight - window.visualViewport?.height;

    // Add padding only when there is a viewport difference.
    if (viewportDiff != 0) container.style.paddingBottom = `${viewportDiff}px`;

    // Cleanup logic for animations.
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
    class="hidden absolute w-64 sm:w-96 px-7 pb-10 pt-2 mb-[env(safe-area-inset-bottom)]"
    style="
          --aug-inlay-bg: #172554;
          --aug-border-bg: #4cd0fc;
          --aug-inlay-opacity: 0.5;
          --aug-inlay-all: 0px;
          --aug-border: initial;
          --aug-border-y: 2px;
          --aug-border-x: 0px;
          "
  >
  <div class="flex justify-center items-center">
    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="#4cd0fc" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
    </svg>
  </div>
  </div>
</HTML>
