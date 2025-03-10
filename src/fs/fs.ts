import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve(__dirname,"../history/history.txt" );

interface saveParams{
  originalCurrency  : string;
  targetCurrency : string;
  amount            : number; 
  result            : number;

}

export function save({originalCurrency, targetCurrency, amount, result}:saveParams ){

  const date = new Date().toLocaleDateString("es-ES");
  const template = `Orginal: ${amount}${originalCurrency} ===> Result: ${result}${targetCurrency} , Date: ${date}\n` 
  fs.appendFileSync(filePath,template, 'utf-8');
}

export function readHistory(){

  const file = fs.readFileSync(filePath);

  console.log(file.toString())



}