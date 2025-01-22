import { get } from "svelte/store";
import quotes from "./data/quotes.json";
import { currentQuote, dialogWindow } from "./stores";
import { moveToIsland } from "./stateChangeHelpers";

let dialogNumber = 0;
let quoteNumber = 0;

export const dialogRenderer = (event: KeyboardEvent) => {
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
      moveToIsland(dialogNumber);
    }
    
    return;
  }
  
  // Render new quote in the dialog box.
  setCurrentQuote(quotes[dialogNumber][quoteNumber]);
};

export const activateKeyListener = (delay = 0) => {
  setTimeout(() => {
    window.addEventListener('keydown', dialogRenderer);
  }, delay);
};

export const deactivateKeyListener = (delay = 0) => {
  setTimeout(() => {
    window.removeEventListener('keydown', dialogRenderer);
  }, delay);
};

export const hideDialogWindow = () => {
  get(dialogWindow).position.set(0, 0, 0);
};

export const showDialogWindow = (distanceFromCamera: number, delay = 3000) => {
  setTimeout(() => {
    get(dialogWindow).position.set(0, 0, -distanceFromCamera);
  }, delay);
};

export const setCurrentQuote = (quote: string) => {
  currentQuote.set(quote);
};
