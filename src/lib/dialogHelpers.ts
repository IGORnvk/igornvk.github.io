import { get } from "svelte/store";
import quotes from "./data/quotes.json";
import { currentQuote, dialogWindow, ghostCompanion } from "./stores";
import { moveToIsland } from "./stateChangeHelpers";
import { attachToCamera } from "./animationHelpers";

let dialogNumber = 0;
let quoteNumber = 0;

export const dialogRenderer = async (event: KeyboardEvent) => {
  // Switch to the next/previous quote.
  if (event.code === 'KeyD') quoteNumber++;
  else if (event.code === 'KeyA' && quoteNumber != 0) quoteNumber--;

  // Deactivate keyboard input or/and proceed to the next dialog.
  if (!quotes[dialogNumber][quoteNumber]) {
    deactivateKeyListener();
    hideDialogWindow();

    dialogNumber++;
    quoteNumber = 0;

    if (quotes[dialogNumber] && quotes[dialogNumber][quoteNumber]) {
      if (dialogNumber > 1) {
        await attachToCamera(get(ghostCompanion));
      }
      
      moveToIsland(dialogNumber);
    }
  }
  
  // Render new quote in the dialog box.
  setCurrentQuote(quotes[dialogNumber][quoteNumber]);
};

export const activateKeyListener = () => {
  window.addEventListener('keydown', dialogRenderer);
};

export const deactivateKeyListener = () => {
  window.removeEventListener('keydown', dialogRenderer);
};

export const hideDialogWindow = () => {
  get(dialogWindow).position.set(0, 0, 0);
};

export const showDialogWindow = (distanceFromCamera: number) => {
  get(dialogWindow).position.set(0, 0, -distanceFromCamera);
};

export const setCurrentQuote = (quote: string) => {
  currentQuote.set(quote);
};
