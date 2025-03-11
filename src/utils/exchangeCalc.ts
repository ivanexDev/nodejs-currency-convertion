export function exchangeCalc(amount: number, exchange: number): number {
  return +(amount * exchange).toFixed(2);
}
