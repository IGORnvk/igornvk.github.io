<script lang="ts">
  import { T } from "@threlte/core";
  import DialogPopup from "./DialogPopup.svelte";
  import DialogPopupHidden from "./DialogPopupHidden.svelte";
</script>

<T.OrthographicCamera
  makeDefault
  zoom={80}
  position={[0, 0, 10]}
/>

<DialogPopup />

<DialogPopupHidden />
