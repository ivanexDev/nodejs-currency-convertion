import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve(__dirname, "../history/history.txt");
const dirPath = path.dirname(filePath);

interface saveParams {
  originalCurrency: string;
  targetCurrency: string;
  amount: number;
  result: number;
}

export function save({
  originalCurrency,
  targetCurrency,
  amount,
  result,
}: saveParams) {
  const date = new Date().toLocaleDateString("es-ES");
  const template = `Orginal: ${amount}${originalCurrency} ===> Result: ${result}${targetCurrency} , Date: ${date}\n`;

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.appendFileSync(filePath, template, "utf-8");
}

export function readHistory() {

  if(!fs.existsSync(filePath)){
    console.log("No existe historial de cambios");
  }else {
    const file = fs.readFileSync(filePath);

    console.log(file.toString());
  }
  
}
