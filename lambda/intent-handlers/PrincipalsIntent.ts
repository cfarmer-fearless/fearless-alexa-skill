import { getIntentName, getSlotValue, HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentRequest } from "ask-sdk-model";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const PrincipalsIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    console.log(getIntentName(handlerInput.requestEnvelope))
    return isIntent(handlerInput, IntentTypes.Principals);
  },
  handle(handlerInput: HandlerInput) {
    console.log('handling principal')
    const principalNumber = getSlotValue(handlerInput.requestEnvelope, 'number');

    if (principalNumber === null || principalNumber === undefined) {
      return handlerInput.responseBuilder
        .speak(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .getResponse();
    }

    switch (principalNumber) {
      case '1st':
        return handlerInput.responseBuilder
          .speak(i18next.t(STRING_KEYS.PRINCIPALS_FIRST))
          .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPORMPT))
          .getResponse();
    
      default:
        break;
    }
  }
}