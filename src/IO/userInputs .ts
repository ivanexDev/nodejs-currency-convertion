import readline from "node:readline";

export const reader = readline.createInterface({
  input: process.stdin,
  output: undefined,
});

export const askQuestion = (question: string): Promise<number> => {
  return new Promise<number>((resolve) => {
    const ask = () => {
      process.stdout.write(question);
      reader.question("", (userResponse) => {
        if (
          isNaN(+userResponse) ||
          ![1, 2, 3, 4, 5, 6, 7, 8].includes(+userResponse)
        ) {
          console.log("\nDebe ingresar un numero de la lista.");
          ask();
        } else {
          console.clear();
          resolve(+userResponse);
        }
      });
    };

    ask();
  });
};

export const closeApp = () => {
  console.log("Finalizando ejecución...");
  reader.close();
  process.exit();
};
