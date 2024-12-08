import { get, writable } from 'svelte/store'

export const heightForItems = writable(1.4);
export const cameraControls = writable(undefined);
export const mesh = writable(undefined);
export const handleCameraMovement = writable((posX: number, posY: number, posZ: number, targetX: number, targetY: number, targetZ: number) => {
  get(cameraControls).setLookAt(posX, posY, posZ, targetX, targetY, targetZ, true);
});
