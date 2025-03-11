import { getExchanges } from "../api/exchange-rate";
import { Conversion_rate } from "../api/types";
import { CURRENCY_OPTIONS } from "../constants";
import { save } from "../fs/fs";
import { exchangeCalc } from "./exchangeCalc";

export async function performConversion(
  originalCurrency: number,
  targetCurrency: number,
  amount: number,
) {
  try {
    const exchangeValues: Conversion_rate = await getExchanges(
      CURRENCY_OPTIONS[originalCurrency],
    );

    const result = exchangeCalc(
      amount,
      exchangeValues[CURRENCY_OPTIONS[targetCurrency]],
    );

    console.log(`El resultado de la conversion de ${amount}${
      CURRENCY_OPTIONS[originalCurrency]
    } a ${CURRENCY_OPTIONS[targetCurrency]} es:
  ${result}${CURRENCY_OPTIONS[targetCurrency]}`);

    save({
      amount,
      result,
      targetCurrency: CURRENCY_OPTIONS[targetCurrency],
      originalCurrency: CURRENCY_OPTIONS[originalCurrency],
    });
  } catch (error) {
    console.error("Error al realizar la conversión: ", error);
  }
}
