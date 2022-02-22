import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentTypes } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const CancelIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Cancel) || isIntent(handlerInput, IntentTypes.Stop);
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = "Goodbye!";
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  }
}