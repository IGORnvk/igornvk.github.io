<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 D:\repos\IGORnvk.github.io\static\models\Flag.glb --root /models/ --types --printwidth 120 --precision 2
-->

<script lang="ts">
  import type * as THREE from 'three'
  import { Group } from 'three'
  import { T, type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { useGltf } from '@threlte/extras'

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  type GLTFResult = {
    nodes: {
      ['Flag_Cylinder-Mesh']: THREE.Mesh
      ['Flag_Cylinder-Mesh_1']: THREE.Mesh
      ['Flag_Cylinder-Mesh_2']: THREE.Mesh
    }
    materials: {
      MetalPole: THREE.MeshStandardMaterial
      Other: THREE.MeshStandardMaterial
      Flag: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/models/Flag.glb')

  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Mesh geometry={gltf.nodes['Flag_Cylinder-Mesh'].geometry} material={gltf.materials.MetalPole} />
    <T.Mesh geometry={gltf.nodes['Flag_Cylinder-Mesh_1'].geometry} material={gltf.materials.Other} />
    <T.Mesh geometry={gltf.nodes['Flag_Cylinder-Mesh_2'].geometry} material={gltf.materials.Flag} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
