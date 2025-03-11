import { LAST_QUESTION } from "../constants";
import { askQuestion, closeApp } from "../IO/userInputs ";

export async function userWantNewOperation() {
  const lastQuestion = await askQuestion(LAST_QUESTION);

  return lastQuestion === 1;
}
