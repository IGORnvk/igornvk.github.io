import { writable } from 'svelte/store'

export const heightForItems = writable(1.4);
export const cameraControls = writable(undefined);
export const mesh = writable(undefined);