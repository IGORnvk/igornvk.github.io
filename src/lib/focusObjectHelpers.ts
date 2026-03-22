import { get } from 'svelte/store';
import { attachToCamera, detachFromCamera, moveCameraTo, setLookAtCamera, slideDialogWindow } from './animationHelpers';
import { dialogWindowHidden, hideDialogWindow, showDialogWindow } from './dialogHelpers';
import { focusObjectRegistry } from './focusObjects';
import {
  activeFocusObjectId,
  activeIslandId,
  cameraControls,
  ghostCompanion,
  isFocusTransitioning,
  shouldRestoreDialog,
  type FocusObjectId
} from './stores';

const isCompanionAttachedToCamera = () => {
  const controls = get(cameraControls);
  const companion = get(ghostCompanion);

  return Boolean(controls && companion.parent === controls.camera);
};

export const canFocusObject = (objectId: FocusObjectId) => {
  const config = focusObjectRegistry[objectId];

  if (!config) return false;
  if (get(isFocusTransitioning)) return false;
  if (get(activeFocusObjectId)) return false;
  if (get(activeIslandId) !== config.islandId) return false;
  if (config.isEnabled && !config.isEnabled()) return false;

  return true;
};

export const enterFocusObject = async (objectId: FocusObjectId) => {
  if (!canFocusObject(objectId)) return;

  const config = focusObjectRegistry[objectId];
  const dialogWasVisible = !dialogWindowHidden();

  shouldRestoreDialog.set(dialogWasVisible);
  isFocusTransitioning.set(true);

  if (dialogWasVisible) {
    slideDialogWindow('out');
    hideDialogWindow();
  }

  if (isCompanionAttachedToCamera()) {
    detachFromCamera(get(ghostCompanion));
  }

  await moveCameraTo(config.focusCamera.position, config.focusCamera.target);

  activeFocusObjectId.set(objectId);
  isFocusTransitioning.set(false);
};

export const exitFocusObject = async () => {
  const objectId = get(activeFocusObjectId);
  if (!objectId || get(isFocusTransitioning)) return;

  const config = focusObjectRegistry[objectId];
  const returnCamera = config.returnCamera ?? {
    position: config.focusCamera.position,
    target: config.focusCamera.target
  };

  isFocusTransitioning.set(true);
  activeFocusObjectId.set(null);

  await moveCameraTo(returnCamera.position, returnCamera.target);

  if (get(shouldRestoreDialog)) {
    showDialogWindow();
  }

  shouldRestoreDialog.set(false);
  isFocusTransitioning.set(false);
};
