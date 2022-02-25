import { getIntentName, getSlotValue, HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const PrincipalsIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Principals);
  },
  handle(handlerInput: HandlerInput) {
    const principalNumber = getSlotValue(handlerInput.requestEnvelope, 'number');
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    if (principalNumber === null || principalNumber === undefined) {
      sessionAttributes.question = i18next.t(STRING_KEYS.PRINCIPALS_INTRO);
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .getResponse();
    }

    switch (principalNumber) {
      case '1st':
        return sayFirstPrincipal(handlerInput, sessionAttributes);
      default:
        break;
    }
  }
}

export const sayFirstPrincipal = (handlerInput: HandlerInput, sessionAttributes: any): Response => {
  sessionAttributes.question = i18next.t(STRING_KEYS.PRINCIPALS_FIRST);
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  
  return handlerInput.responseBuilder
    .speak(i18next.t(STRING_KEYS.PRINCIPALS_FIRST))
    .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPORMPT))
    .getResponse();
}