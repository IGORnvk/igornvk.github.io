<script
  module
  lang="ts"
>
  let installed = false
</script>

<script lang="ts">
  import { T, useTask, useParent, useThrelte } from '@threlte/core'
  import type {
    CameraControlsProps,
  } from '../CameraControls.svelte'

  type $$Props = CameraControlsProps

  import CameraControls from 'camera-controls'
  import {
    Box3,
    Matrix4,
    Quaternion,
    Raycaster,
    Sphere,
    Spherical,
    Vector2,
    Vector3,
    Vector4,
    type PerspectiveCamera
  } from 'three'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
  import { cameraControls } from '$lib/stores';

  const subsetOfTHREE = {
    Vector2,
    Vector3,
    Vector4,
    Quaternion,
    Matrix4,
    Spherical,
    Box3,
    Sphere,
    Raycaster
  }

  if (!installed) {
    CameraControls.install({ THREE: subsetOfTHREE })
    installed = true
  }

  const parent = useParent()

  if (!$parent) {
    throw new Error('CameraControls must be a child of a ThreeJS camera')
  }

  const { renderer, invalidate } = useThrelte()

  interface Props {
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    children?: import('svelte').Snippet<[any]>;
    [key: string]: any
  }

  let { autoRotate = false, autoRotateSpeed = 1, children, ...rest }: Props = $props();

  const controlsElement = renderer?.domElement.parentElement ?? renderer?.domElement
  export const ref = $state(new CameraControls($parent as PerspectiveCamera, controlsElement))
  ref.setLookAt(-10, 5, 7, 0, 1.6, 0)
  ref.mouseButtons.right = CameraControls.ACTION.NONE
  ref.touches.two = CameraControls.ACTION.NONE
  ref.touches.three = CameraControls.ACTION.NONE

  const getControls = () => ref

  let disableAutoRotate = $state(false)

  useTask(
    (delta) => {
      if (autoRotate && !disableAutoRotate) {
        getControls().azimuthAngle += 4 * delta * DEG2RAD * autoRotateSpeed
      }
      const updated = getControls().update(delta)
      if (updated) invalidate()
    },
    {
      autoInvalidate: false
    }
  )

  $cameraControls = ref;
</script>

<T
  is={ref}
  oncontrolstart={() => {
    disableAutoRotate = true
  }}
  onzoom={(event: unknown) => {
    console.log('zoomstart', event)
  }}
  oncontrolend={() => {
    disableAutoRotate = false
  }}
  {...rest}
>
  {@render children?.({ ref, })}
</T>
