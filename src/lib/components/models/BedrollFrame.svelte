<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 D:\repos\IGORnvk.github.io\static\models\BedrollFrame.glb --root /models/ --types --printwidth 120 --precision 2
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
      bedrollFrame: THREE.Mesh
    }
    materials: {
      wood: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/models/BedrollFrame.glb')

  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Mesh geometry={gltf.nodes.bedrollFrame.geometry} material={gltf.materials.wood} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
