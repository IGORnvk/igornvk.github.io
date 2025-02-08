import { Easing, Group, Tween } from "@tweenjs/tween.js";
import { get } from "svelte/store";
import { cameraControls } from "./stores";
import { Euler, Quaternion, Vector3, type Object3D } from "three";

const tweenGroup = new Group();
let lookAtCamera = false;

export const updateTweens = (time = performance.now()) => {
  tweenGroup.update(time);
};

const prepareTween = (targetValue: Euler | Vector3 | Quaternion, resolve?: () => void) => {
  const tween = new Tween(targetValue);

  tween.onComplete(() => {
    tweenGroup.remove(tween);
    if (resolve) resolve();
  });

  tweenGroup.add(tween);

  return tween;
};

export const rotateObjectTo = (object: Object3D, axis: 'x' | 'y' | 'z', angle: number, delay = 0, duration = 1000) => {
  return new Promise<void>((resolve) => {
    prepareTween(object.rotation, resolve)
      .to({ [axis]: angle }, duration)
      .easing(Easing.Quadratic.Out)
      .delay(delay)
      .start();
  });
};

export const smoothLookAt = (object: Object3D, targetObject: Object3D, delay = 0, duration = 1000) => {
  return new Promise<void>((resolve) => {
    // Get the current and target quaternions.
    const current = object.quaternion.clone();
    const target = new Quaternion();

    object.lookAt(targetObject.position);
    target.copy(object.quaternion);

    object.quaternion.copy(current);

    // Check for the shortest path.
    if (current.dot(target) < 0) {
      target.set(-target.x, -target.y, -target.z, -target.w);
    }

    prepareTween(current, resolve)
      .to(target, duration)
      .easing(Easing.Quadratic.Out)
      .onUpdate(() => {
        object.quaternion.copy(current).normalize();
      })
      .delay(delay)
      .start();
  });
};

export const setLookAtCamera = (value: boolean) => {
  lookAtCamera = value;
};

export const alwaysLookAtCamera = (object: Object3D) => {
  if (lookAtCamera) {
    let cameraPos = new Vector3();
    get(cameraControls).camera.getWorldPosition(cameraPos);
    object.lookAt(cameraPos);
  }
};

export const moveObjectTo = (object: Object3D, position: Euler | Vector3, delay = 0, duration = 1000) => {
  return new Promise<void>((resolve) => {
    return prepareTween(object.position, resolve)
      .to(position, duration)
      .easing(Easing.Quadratic.Out)
      .delay(delay)
      .start();
  });
};

export const moveCameraTo = async (pos: Euler, target: Euler) => {
    const camera = get(cameraControls);

    camera.enabled = false;
    const promise = camera.setLookAt(pos.x, pos.y, pos.z, target.x, target.y, target.z, true).then(() => {
      camera.enabled = true;
    });

    return promise;
};

export const scaleObjectTo = async (object: Object3D, scale: number, delay = 0, duration = 1000) => {
  return new Promise<void>((resolve) => {
    prepareTween(object.scale, resolve)
      .to({ x: scale, y: scale, z: scale }, duration)
      .easing(Easing.Quadratic.Out)
      .delay(delay)
      .start();
  });
};

export const detachFromCamera = (object: Object3D) => {
  const parentCamera = get(cameraControls).camera;
  const worldPosition = new Vector3();
  const worldQuaternion = new Quaternion();

  object.getWorldPosition(worldPosition);
  object.getWorldQuaternion(worldQuaternion);

  parentCamera.remove(object);

  // Add the object back to the scene.
  parentCamera.parent?.add(object);

  object.position.copy(worldPosition);
  object.quaternion.copy(worldQuaternion);
};

export const attachToCamera = async (object: Object3D, delay = 0, initial = false) => {
  return new Promise<void>((resolve) => {
    const parentCamera = get(cameraControls).camera;

    // Always the same.
    const offset = new Vector3(0.5, 0, -2);

    if (initial) {
      parentCamera.add(object);
      object.position.copy(offset);

      smoothLookAt(object, parentCamera);
    } else {
      const targetPosition = new Vector3();
      const worldQuaternion = new Quaternion();
      const targetQuaternion = new Quaternion();

      // Calculate the target world position based on the camera's local desired position.
      targetPosition.copy(offset).applyMatrix4(parentCamera.matrixWorld);

      object.getWorldQuaternion(worldQuaternion);

      prepareTween(object.position)
      .to(targetPosition, 1000)
      .easing(Easing.Quadratic.Out)
      .onComplete(async () => {
        // Attach the object to the camera.
        targetQuaternion.copy(worldQuaternion).premultiply(parentCamera.quaternion.clone().invert());
        parentCamera.add(object);

        // Set the position and rotation relative to the camera.
        object.position.copy(offset);
        object.quaternion.copy(targetQuaternion);

        await smoothLookAt(object, parentCamera);

        resolve();
      })
      .delay(delay)
      .start();
      
      scaleObjectTo(object, 0.1);
    }
  });
};

export const slideDialogWindow = (direction: 'in' | 'out') => {
  const dialogWindowContainer = document.getElementById('dialogWindowContainer');
  dialogWindowContainer?.classList.add(`animate-slide-${direction}`);
};
