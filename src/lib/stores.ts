import { writable } from 'svelte/store'

export const heightForItems = writable(1.4);
export const cameraControls = writable(null);
export const mesh = writable(null);
export const ghostCompanion = writable(null);
