import { Group, Mesh } from 'three';
import { writable } from 'svelte/store';
import quotes from './data/quotes.json';
import CameraControls from 'camera-controls';

export type FocusObjectId = 'intro-board';

export const heightForItems = writable<number>(1.4);
export const cameraControls = writable<CameraControls | null>(null);
export const mesh = writable<Mesh | null>(null);
export const ghostCompanion = writable<Group>(new Group());
export const dialogWindow = writable<Group>(new Group());
export const currentQuote = writable<string>(quotes[0][0]);
export const activeIslandId = writable<number>(1);
export const activeFocusObjectId = writable<FocusObjectId | null>(null);
export const shouldRestoreDialog = writable(false);
export const isFocusTransitioning = writable(false);
