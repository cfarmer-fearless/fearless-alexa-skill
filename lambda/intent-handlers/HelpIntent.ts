import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";
import i18next from "i18next";

export const HelpIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Help);
  },
  handle(handlerInput: HandlerInput) {
    return handlerInput.responseBuilder
      .speak(i18next.t(STRING_KEYS.HELP))
      .reprompt(i18next.t(STRING_KEYS.HELP_REPROMPT))
      .getResponse();
  }
}