import { url, key } from "../constants";
import { ExhangeApiResponse } from "./types";

export async function getExchanges(originalCurrency: string) {
  const response = await fetch(`${url}${key}/latest/${originalCurrency}`);
  const data = (await response.json()) as ExhangeApiResponse;
  const convertionRates = data.conversion_rates;

  return convertionRates;
}
