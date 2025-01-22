import { moveCameraTo, rotateObject } from "./animationHelpers";
import { get } from "svelte/store";
import { ghostCompanion } from "./stores";
import { activateKeyListener, deactivateKeyListener, showDialogWindow } from "./dialogHelpers";

const islandSettings = {
  cameraPos: {
    1: { x: -2, y: 1.8, z: -1 },
    2: { x: 0, y: 2, z: -0.4 }
  },
  cameraTarget: {
    1: { x: 0, y: 1.6, z: 0 },
    2: { x: 0.8, y: 1.7, z: -3 }
  },
  companion: {
    1: -2.2,
    2: -2.2
  },
};
const actionDelay = 2000;

export const moveToIsland = (islandNumber: number) => {
  rotateObject(get(ghostCompanion), 'y', islandSettings.companion[islandNumber]);
  moveCameraTo(islandSettings.cameraPos[islandNumber], islandSettings.cameraTarget[islandNumber]);

  rotateObject(get(ghostCompanion), 'y', -0.2, actionDelay);

  activateKeyListener(actionDelay);
  showDialogWindow(50);
};
