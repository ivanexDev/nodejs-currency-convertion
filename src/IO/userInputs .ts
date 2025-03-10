import readline from "node:readline"


export const reader = readline.createInterface({
  input: process.stdin,
  output: undefined,
});

export const askQuestion = (question: string): Promise<number> =>{

  return new Promise<number>(resolve =>{

    const ask = ()=>{

      process.stdout.write(question);
      reader.question("", (userResponse)=>{

        if(isNaN(+userResponse)){
          console.log("\nDebe ingresar un numero.")
          ask();
        }else{
          console.clear();
          resolve(+userResponse)
        }
      })


    }

    ask();

  })
}


export const closeApp = () => {
  console.log("Finalizando ejecución...");
  reader.close();
  process.exit();
};