<script lang="ts">
  import "../app.css";
  import App from '$lib/components/App.svelte';
</script>

<div class="app">
  <App />
</div>

<style lang="postcss">
  :global(body) {
    margin: 0;
  }

  .app {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
  }
</style>
