import type { Component } from 'svelte';
import IntroBoardContent from './components/focus/IntroBoardContent.svelte';
import type { FocusObjectId } from './stores';
import { getIslandOverviewCamera, type CameraShot } from './stateChangeHelpers';

export type FocusObjectConfig = {
  id: FocusObjectId;
  islandId: number;
  focusCamera: CameraShot;
  returnCamera?: CameraShot;
  hitboxSize: [number, number, number];
  hitboxPosition?: [number, number, number];
  hitboxRotation?: [number, number, number];
  contentComponent: Component;
  alwaysVisible?: boolean;
  isEnabled?: () => boolean;
};

export const focusObjectRegistry: Record<FocusObjectId, FocusObjectConfig> = {
  'intro-board': {
    id: 'intro-board',
    islandId: 1,
    focusCamera: {
      position: { x: -0.4, y: 1.55, z: 0.05 },
      target: { x: -0.2, y: 1.55, z: 0.3 }
    },
    returnCamera: getIslandOverviewCamera(1),
    hitboxSize: [0.9, 1.2, 0.35],
    hitboxPosition: [0, 0.52, 0],
    contentComponent: IntroBoardContent,
    alwaysVisible: true
  }
};
