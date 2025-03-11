import { readHistory } from "../fs/fs";
import { closeApp } from "../IO/userInputs ";
import { userWantNewOperation } from "./userWantNewOperation";

export const handleCurrencySelection = async (originalCurrency: number) => {
  if (originalCurrency === 10) {
    closeApp(); // Termina la ejecución si se elige la opción de salir
    return false;
  }

  if (originalCurrency === 9) {
    readHistory(); // Muestra el historial si se elige la opción de historial
    return !(await userWantNewOperation());
  }

  return true;
};
