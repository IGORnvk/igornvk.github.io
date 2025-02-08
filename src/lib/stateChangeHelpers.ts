import { detachFromCamera, moveCameraTo, moveObjectTo, rotateObjectTo, scaleObjectTo, setLookAtCamera, smoothLookAt } from "./animationHelpers";
import { get } from "svelte/store";
import { cameraControls, ghostCompanion } from "./stores";
import { activateKeyListener, dialogWindowHidden, showDialogWindow } from "./dialogHelpers";

const islandSettings = {
  cameraPos: {
    1: { x: -2, y: 1.8, z: -1 },
    2: { x: 0, y: 2, z: -0.4 },
    3: { x: 1, y: 2.5, z: -2 },
  },
  cameraTarget: {
    1: { x: 0, y: 1.6, z: 0 },
    2: { x: 0.8, y: 1.7, z: -3 },
    3: { x: 4, y: 1.5, z: -1.4 },
  },
  companion: {
    rotationAngle: {
      1: -2.2,
      2: -2.2,
      3: 1.8
    },
    position: {
      1: { x: -0.1, y: 1.5, z: 0.5 },
      2: { x: 1, y: 1.6, z: -3 }
    }
  },
};

export const moveToIsland = async (islandNumber: number) => {
  const companion = get(ghostCompanion);
  const camera = get(cameraControls).camera;

  // Rotate and move to the next island.
  await rotateObjectTo(companion, 'y', islandSettings.companion.rotationAngle[islandNumber]);
  await moveCameraTo(islandSettings.cameraPos[islandNumber], islandSettings.cameraTarget[islandNumber]);

  // Move companion to the position on the island.
  detachFromCamera(companion);
  moveObjectTo(companion, islandSettings.companion.position[islandNumber]);
  await scaleObjectTo(companion, 0.07);
  await smoothLookAt(companion, camera);
  
  setLookAtCamera(true);
  activateKeyListener();
  if (dialogWindowHidden()) showDialogWindow();
};
