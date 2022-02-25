import { getSlotValue, HandlerInput, RequestHandler } from "ask-sdk-core";
import { Response } from "ask-sdk-model";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export type PrincipalNumber = '1st' | '2nd' | '3rd' | '4th';

export const PrincipalsIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Principals);
  },
  handle(handlerInput: HandlerInput) {
    const principalNumber = getSlotValue(handlerInput.requestEnvelope, 'number') as PrincipalNumber;
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    if (principalNumber === null || principalNumber === undefined) {
      sessionAttributes.question = i18next.t(STRING_KEYS.PRINCIPALS_INTRO);
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .getResponse();
    }

    return sayPrincipal(principalNumber, handlerInput, sessionAttributes);
  }
}

export const sayPrincipal = (principal: PrincipalNumber, handlerInput: HandlerInput, sessionAttributes: any): Response => {
  switch (principal) {
    case '1st': {
      const speakOutput = i18next.t(STRING_KEYS.PRINCIPALS_FIRST);

      sessionAttributes.question = speakOutput;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT))
        .getResponse();
    }
    case '2nd': {
      const speakOutput = i18next.t(STRING_KEYS.PRINCIPALS_SECOND);

      sessionAttributes.question = speakOutput;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_SECOND_REPROMPT))
        .getResponse();
    }
    case '3rd': {
      const speakOutput = i18next.t(STRING_KEYS.PRINCIPALS_THIRD);

      sessionAttributes.question = speakOutput;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(i18next.t(STRING_KEYS.PRINCIPALS_THIRD_REPROMPT))
        .getResponse();
    }
    case '4th': {
      const speakOutput = i18next.t(STRING_KEYS.PRINCIPALS_FOURTH);

      sessionAttributes.question = speakOutput;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
    default:
      break;
  }
};