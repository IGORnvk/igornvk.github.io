<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 D:\repos\IGORnvk.github.io\static\models\GhostCompanion.glb --root /models/ --types --printwidth 120 --precision 2
-->

<script lang="ts">
  import * as THREE from 'three'
  import { T, type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { useGltf, useGltfAnimations } from '@threlte/extras'
  import { onMount } from 'svelte'
  import { Group } from 'three'
  import { ghostCompanion } from '$lib/stores'
  import { attachToCamera } from '$lib/animationHelpers';

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  type ActionName = 'Mesh_0Action'
  type GLTFResult = {
    nodes: {
      Mesh_0: THREE.Mesh
    }
    materials: {
      Material_0: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/models/GhostCompanion.glb')
  export const { actions, mixer } = useGltfAnimations<ActionName>(gltf, ref)

  onMount(async () => {
    attachToCamera(ref, 0, true);

    const interval = setInterval(() => {
      const action = actions.current['Mesh_0Action'] as THREE.AnimationAction;

      if (action) {
        clearInterval(interval);
        action.play();
      }
    }, 50);
  });

  $ghostCompanion = ref;
  
  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Group name="Scene">
      <T.Mesh
        name="Mesh_0"
        geometry={gltf.nodes.Mesh_0.geometry}
        material={gltf.materials.Material_0}
        position={[-0.02, 1.48, 0.02]}
        rotation={[-0.04, -0.04, 0.04]}
        scale={0.98}
      />
    </T.Group>
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
