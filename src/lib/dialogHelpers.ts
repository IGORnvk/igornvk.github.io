import { get } from "svelte/store";
import { currentQuote, dialogWindow, ghostCompanion } from "./stores";
import { moveToIsland } from "./stateChangeHelpers";
import { attachToCamera, setLookAtCamera } from "./animationHelpers";
import quotes from "./data/quotes.json";

let dialogNumber = 0;
let quoteNumber = 0;

export const dialogRenderer = async (event: KeyboardEvent) => {
  // Handle hiding the dialog window on demand.
  if (event.code === 'KeyH') {
    if (dialogWindowHidden()) showDialogWindow();
    else hideDialogWindow();

    return;
  }
  
  // Continue only when the dialog window is displayed.
  if (!dialogWindowHidden()) {
    // Switch to the next/previous quote.
    if (event.code === 'KeyD') quoteNumber++;
    else if (event.code === 'KeyA' && quoteNumber != 0) quoteNumber--;
    else return;

    // Deactivate keyboard input or/and proceed to the next dialog.
    if (!quotes[dialogNumber][quoteNumber]) {
      setLookAtCamera(false);
      deactivateKeyListener();
      hideDialogWindow();

      dialogNumber++;
      quoteNumber = 0;

      if (quotes[dialogNumber] && quotes[dialogNumber][quoteNumber]) {
        if (dialogNumber > 1) {
          await attachToCamera(get(ghostCompanion));
        }

        moveToIsland(dialogNumber);
      } else return;
    }

    // Render new quote in the dialog box.
    setCurrentQuote(quotes[dialogNumber][quoteNumber]);
  }
};

export const activateKeyListener = (): void => {
  window.addEventListener('keydown', dialogRenderer);
};

export const deactivateKeyListener = (): void => {
  window.removeEventListener('keydown', dialogRenderer);
};

export const hideDialogWindow = (): void => {
  get(dialogWindow).position.set(0, 0, 5);
};

export const showDialogWindow = (distanceFromCamera = 55): void => {
  get(dialogWindow).position.set(0, 0, -distanceFromCamera);
};

export const dialogWindowHidden = (): boolean => {
  const windowPosition = get(dialogWindow).position;

  return (windowPosition.x == 0 && windowPosition.y == 0 && windowPosition.z == 5);
}

export const setCurrentQuote = (quote: string): void => {
  currentQuote.set(quote);
};

export const getQuoteNumber = (): number => {
  return quoteNumber;
};

export const getDialogNumber = (): number => {
  return dialogNumber;
};
