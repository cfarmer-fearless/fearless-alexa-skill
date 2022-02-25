import { HandlerInput, RequestHandler } from "ask-sdk-core";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";
import { sayFirstPrincipal } from "./PrincipalsIntent";

export const YesIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Yes);
  },
  handle(handlerInput: HandlerInput) {
    console.log('handling yes intent');
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const { question } = sessionAttributes;
    
    if (question === undefined) {
      const speakOutput = i18next.t(STRING_KEYS.UNKNOWN_QUESTION);
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse()
    }

    switch (question) {
      case i18next.t(STRING_KEYS.PRINCIPALS_INTRO):
        return sayFirstPrincipal(handlerInput, sessionAttributes);    
      default:
        break;
    }
  }
}