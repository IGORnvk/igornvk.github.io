<script lang="ts">
  import 'augmented-ui/augmented-ui.min.css';
</script>

<div class="flex w-full h-full justify-center items-center">
  <div
    class="flex gap-1 relative mx-auto max-w-md"
  >
    <!-- <img
      src="/src/img/glitch-blue.png"
      class="object-scale-down self-start absolute h-4 -top-2 -left-4"
      alt="glitch"
    /> -->
    <div class="flex flex-col gap-2">
      <div
        data-augmented-ui="tl-clip br-clip both"
        style="
        --aug-inlay-bg: #1d4ed8;
        --aug-border-bg: #4cd0fc;
        --aug-inlay-opacity: 0.5;
        --aug-inlay-all: 0px;
        --aug-border: initial;
        --aug-border-y: 2px;
        --aug-border-x: 2px;
        "
        class=""
      >
        <div class="p-7">
          <div class="font-bold sm:text-xl text-main uppercase">
            <p>text</p>
          </div>
          <slot name="description" />
        </div>
      </div>
    </div>
  </div>
</div>
