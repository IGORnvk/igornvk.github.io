import { Easing, Group, Tween } from "@tweenjs/tween.js";

const tweenGroup = new Group();

export const updateTweens = (time = performance.now()) => {
  tweenGroup.update(time);
}

export const rotateObject = (object: THREE.Object3D, axis: 'x' | 'y' | 'z', angle: number, duration = 1000) => {
  const tween = new Tween(object.rotation);
  tweenGroup.add(tween);

  tween.to({ [axis]: object.rotation[axis] + angle }, duration)
      .easing(Easing.Quadratic.Out)
      .start();
};
