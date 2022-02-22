import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentTypes } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const HelpIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = "You can say hello to me! How can I help?";

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
}