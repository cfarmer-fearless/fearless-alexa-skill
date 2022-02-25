import { HandlerInput, RequestHandler } from "ask-sdk-core";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";
import { sayPrincipal } from "./PrincipalsIntent";

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
        return sayPrincipal('1st', handlerInput, sessionAttributes); 
      case i18next.t(STRING_KEYS.PRINCIPALS_FIRST): 
        return sayPrincipal('2nd', handlerInput, sessionAttributes);
      case i18next.t(STRING_KEYS.PRINCIPALS_SECOND):
        return sayPrincipal('3rd', handlerInput, sessionAttributes);
      case i18next.t(STRING_KEYS.PRINCIPALS_THIRD):
        return sayPrincipal('4th', handlerInput, sessionAttributes);
      default:
        break;
    }
  }
}