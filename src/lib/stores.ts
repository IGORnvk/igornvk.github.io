import { Group, Mesh } from 'three';
import { writable } from 'svelte/store';
import quotes from './data/quotes.json';
import CameraControls from 'camera-controls';

export const heightForItems = writable<number>(1.4);
export const cameraControls = writable<CameraControls>(null);
export const mesh = writable<Mesh>(null);
export const ghostCompanion = writable<Group>(new Group());
export const dialogWindow = writable<Group>(new Group());
export const currentQuote = writable<string>(quotes[0].text);
