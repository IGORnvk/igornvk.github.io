import { get } from "svelte/store";
import { activeFocusObjectId, currentQuote, dialogWindow, ghostCompanion } from "./stores";
import { moveToIsland } from "./stateChangeHelpers";
import { attachToCamera, setLookAtCamera, slideDialogWindow } from "./animationHelpers";
import quotes from "./data/quotes.json";

let dialogNumber = 0;
let quoteNumber = 0;

export const dialogRenderer = async (event: KeyboardEvent) => {
  if (get(activeFocusObjectId)) {
    return;
  }

  // Handle hiding the dialog window on demand.
  if (event.code === 'KeyH') {
    // When hiding the window, animation should be played first,
    // and only after that the position should be changed.
    // In case of showing the window, it's the other way around.
    if (dialogWindowHidden()) showDialogWindow();
    else slideDialogWindow('out');

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
      slideDialogWindow('out');

      dialogNumber++;
      quoteNumber = 0;

      if (quotes[dialogNumber] && quotes[dialogNumber][quoteNumber]) {
        if (dialogNumber > 1) {
          await attachToCamera(get(ghostCompanion));
        }

        moveToIsland(dialogNumber as Parameters<typeof moveToIsland>[0]);
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
  get(dialogWindow).position.set(0, 0, 15);
};

export const showDialogWindow = (): void => {
  document.getElementById('dialogWindowContainer')?.classList.remove('hidden');
  slideDialogWindow('in');
  get(dialogWindow).position.set(0, 0, 0);
};

export const dialogWindowHidden = (): boolean => {
  const windowPosition = get(dialogWindow).position;

  return (windowPosition.x == 0 && windowPosition.y == 0 && windowPosition.z == 15);
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
