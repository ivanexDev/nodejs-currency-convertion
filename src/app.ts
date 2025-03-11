import {
  FIRST_QUESITON,
  LAST_QUESTION,
  SECOND_QUESTION,
  TITLE,
} from "./constants";
import { readHistory } from "./fs/fs";
import { askQuestion, closeApp } from "./IO/userInputs ";
import { performConversion } from "./utils/performConversion";
import { userWantNewOperation } from "./utils/userWantNewOperation";

(async () => {
  console.log(TITLE);

  let continueCalculating = true;

  while (continueCalculating) {
    let originalCurrency: number = await askQuestion(FIRST_QUESITON);

    if (originalCurrency === 8) {
      closeApp();
    }

    if (originalCurrency === 7) {
      readHistory();
      continueCalculating = await userWantNewOperation();
      continue;
    }

    let targetCurrency: number = await askQuestion(SECOND_QUESTION);
    let amount: number = await askQuestion("\nCantidad a cambiar:\n");

    await performConversion(originalCurrency, targetCurrency, amount);

    continueCalculating = await userWantNewOperation();
  }

  closeApp();
})();
