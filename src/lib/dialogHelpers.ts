import { get } from "svelte/store";
import quotes from "./data/quotes.json";
import { currentQuote, dialogWindow } from "./stores";

let quoteNumber = 0;
let keyListener = true;

export const dialogRenderer = (event: KeyboardEvent) => {
  if (event.code === 'KeyF' && keyListener) {
    quoteNumber++;

    if (!quotes[quoteNumber]) {
      deactivateKeyListener();
      
      return;
    }

    if (quotes[quoteNumber].hide) {
      hideDialogWindow();
      deactivateKeyListener();
    }
    
    setCurrentQuote(quotes[quoteNumber].text);
  }
};

export const activateKeyListener = () => {
  keyListener = true;
};

export const deactivateKeyListener = () => {
  keyListener = false;
};

export const hideDialogWindow = () => {
  get(dialogWindow).position.set(0, 0, 0);
};

export const showDialogWindow = (distanceFromCamera: number) => {
  get(dialogWindow).position.set(0, 0, distanceFromCamera);
}

export const setCurrentQuote = (quote: string) => {
  currentQuote.set(quote);
};
