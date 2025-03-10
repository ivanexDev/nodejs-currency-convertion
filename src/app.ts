
import { FIRST_QUESITON, SECOND_QUESTION, TITLE } from "./constants";
import { askQuestion } from "./IO/userInputs ";

import { handleCurrencySelection } from "./utils/currencySelection";
import { performConversion } from "./utils/performConversion";

(async () => {

  console.log(TITLE);

  let originalCurrency: number = await askQuestion(FIRST_QUESITON);
  await handleCurrencySelection(originalCurrency);

  let targetCurrency: number = await askQuestion(SECOND_QUESTION);
  let amount: number = await askQuestion("\nCantidad a cambiar:\n");

  await performConversion(originalCurrency, targetCurrency, amount);

})();
