<script lang="ts">
  import { T } from '@threlte/core';
  import { HTML } from '@threlte/extras';
  import { activeFocusObjectId } from '$lib/stores';
  import { exitFocusObject } from '$lib/focusObjectHelpers';
  import { PlaneGeometry } from 'three';

  const boardHtmlGeometry = new PlaneGeometry(0.14, 0.12);
</script>

<T.Group position={[-0.201, 1.525, 0.299]} rotation={[0, -2.4, 0]}>
  <HTML
    transform
    position={[0, 0, 0.001]}
    distanceFactor={0.07}
    occlude="blending"
    geometry={boardHtmlGeometry}
    pointerEvents={$activeFocusObjectId === 'intro-board' ? 'auto' : 'none'}
    center
  >
    <section class="h-[655px] w-full max-w-3xl overflow-hidden rounded-sm bg-[#7a6950] px-2 py-1 text-center text-md leading-tight text-stone-100 ring-1 ring-amber-900/10">
      <p class="mb-1 font-bold uppercase tracking-wide text-amber-200">About Me</p>
      <h2 class="mb-1 font-semibold leading-none text-amber-50">Ihor Novikov</h2>
      <p class="mb-1 text-sm leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat justo sed est
        vulputate, id sagittis enim faucibus.
      </p>
      <p class="mb-1 text-sm leading-tight">
        Integer viverra augue at posuere vulputate. Tellus mauris tempor elit.
      </p>
      {#if $activeFocusObjectId === 'intro-board'}
        <button
          type="button"
          class="rounded-full bg-amber-900 px-2 py-1 text-sm font-semibold text-amber-50 transition-colors hover:bg-amber-800"
          onclick={() => void exitFocusObject()}
        >
          Back
        </button>
      {/if}
    </section>
  </HTML>
</T.Group>
