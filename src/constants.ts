import { Conversion_rate } from "./api/types";

process.loadEnvFile();

export const url = process.env.URL;
export const key = process.env.API_KEY;

export const TITLE = `
*****************************************************
                 CONVERSOR DE MONEDA
*****************************************************
`;
export const FIRST_QUESITON = `
Elige el numero de la moneda original

1) ARS - Peso argentino

2) BOB - Boliviano boliviano

3) BRL - Real brasileño

4) CLP - Peso chileno

5) COP - Peso colombiano

6) USD - Dólar estadounidense

7) Ver Historial

8) Salir

`;

export const SECOND_QUESTION = `
Elige el numero de la moneda objetivo

1) ARS - Peso argentino

2) BOB - Boliviano boliviano

3) BRL - Real brasileño

4) CLP - Peso chileno

5) COP - Peso colombiano

6) USD - Dólar estadounidense
  
`;

export const CURRENCY_OPTIONS: { [key: number]: keyof Conversion_rate } = {
  1: "ARS",
  2: "BOB",
  3: "BRL",
  4: "CLP",
  5: "COP",
  6: "USD",
};

export const LAST_QUESTION = `
Quieres calcular otra moneda?
Elije una opción

1) Si
2) No

`;
