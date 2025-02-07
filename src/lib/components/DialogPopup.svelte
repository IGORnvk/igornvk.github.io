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
  <div
    data-augmented-ui="both tl-clip-x br-clip-x tr-clip bl-clip"
    class="inline-block w-screen max-w-xl px-7 pb-7 pt-10 font-bold sm:text-xl text-main uppercase break-words"
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
    <div class="flex gap-1 absolute right-4 top-3 text-sm sm:text-base">
      <div data-augmented-ui="border" class="px-0.5 sm:px-2 py-0 w-fit rounded-md" style="--aug-border-bg: #4cd0fc; --aug-border-all: 1.5px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="size-5 sm:hidden">
          <path fill="#4cd0fc" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
        <p class="hidden sm:block">H</p>
      </div>
    </div>
    <div>
      { $currentQuote }
    </div>
    <div class="mt-10 flex justify-between">
      {#if quoteNumber != 0}
        <div class="flex gap-2">
          <p
            data-augmented-ui="border"
            class="px-2 py-0 w-fit rounded-md" style="--aug-border-bg: #4cd0fc; --aug-border-all: 1.5px;">A</p>
          Previous
        </div>
      {/if}
      <div class="flex gap-2 ml-auto">
        <p
          data-augmented-ui="border"
          class="px-2 py-0 w-fit rounded-md" style="--aug-border-bg: #4cd0fc; --aug-border-all: 1.5px;">D</p>
        Next
      </div>
    </div>
  </div>
</HTML>
