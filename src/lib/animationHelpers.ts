import { Easing, Group, Tween } from "@tweenjs/tween.js";
import { get } from "svelte/store";
import { cameraControls } from "./stores";
import type { Object3D } from "three";

const tweenGroup = new Group();

export const updateTweens = (time = performance.now()) => {
  tweenGroup.update(time);
};

export const rotateObject = (object: Object3D, axis: 'x' | 'y' | 'z', angle: number, delay = 0, duration = 1000) => {
  setTimeout(() => {
    const tween = new Tween(object.rotation);
  tweenGroup.add(tween);

  tween.to({ [axis]: angle }, duration)
      .easing(Easing.Quadratic.Out)
      .start();
  }, delay);
};

export const moveCameraTo = (pos: { x: number, y: number, z: number }, target: { x: number, y: number, z: number }, delay = 1000) => {
  setTimeout(() => {
    get(cameraControls).setLookAt(pos.x, pos.y, pos.z, target.x, target.y, target.z, true);
  }, delay);
};
