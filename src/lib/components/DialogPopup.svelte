<script lang="ts">
  import { useFrame, useThrelte } from "@threlte/core";
  import { currentQuote, dialogWindow } from "$lib/stores";
  import { HTML } from "@threlte/extras";
  import { onMount } from "svelte";
  import { Group } from "three";
  import { getQuoteNumber } from "$lib/dialogHelpers";
  import "augmented-ui/augmented-ui.min.css";

  export const ref = new Group();
  const { camera } = useThrelte();
  let quoteNumber = getQuoteNumber();

  useFrame(() => {
    quoteNumber = getQuoteNumber();
  });

  onMount(() => {
    camera.current.add(ref);
    ref.position.set(0, 0, -55);
  });

  $dialogWindow = ref;
</script>

<HTML
  {ref}
  transform
  sprite
>
  <div class="w-8 h-1 bg-main absolute top-0 z-10"></div>
  <div class="w-8 h-1 bg-main absolute top-0 z-10 -right-0"></div>
  <div class="w-8 h-1 bg-main absolute bottom-0 z-10"></div>
  <div class="w-8 h-1 bg-main absolute bottom-0 z-10 right-0"></div>
  <div
    data-augmented-ui="both"
    class="inline-block w-auto max-w-xl p-7 font-bold sm:text-xl text-main uppercase break-words"
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
    <div>
      { $currentQuote }
    </div>
    <div class="mt-10 flex justify-between">
      {#if quoteNumber != 0}
        <div class="flex gap-2">
          <p
            data-augmented-ui="border"
            class="px-2 py-0 w-fit rounded-md" style="--aug-border-bg: #4cd0fc; --aug-border-all: 1.5px;">A</p>
          <p>Previous</p>
        </div>
      {/if}
      <div class="flex gap-2 ml-auto">
        <p
          data-augmented-ui="border"
          class="px-2 py-0 w-fit rounded-md" style="--aug-border-bg: #4cd0fc; --aug-border-all: 1.5px;">D</p>
        <p>Next</p>
      </div>
    </div>
  </div>
</HTML>
