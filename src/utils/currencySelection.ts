import { readHistory } from "../fs/fs";
import { closeApp } from "../IO/userInputs ";


export const handleCurrencySelection = async (originalCurrency: number) => {
  if (originalCurrency === 10) {
    closeApp(); // Termina la ejecución si se elige la opción de salir
  }

  if (originalCurrency === 9) {
    readHistory(); // Muestra el historial si se elige la opción de historial
    closeApp();
  }
};