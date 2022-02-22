import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentRequest } from "ask-sdk-model";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const PrincipalsIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.Principals);
  },
  handle(handlerInput: HandlerInput) {
    const principalNumber = (handlerInput.requestEnvelope.request as IntentRequest).intent.slots?.number.value;

    if (principalNumber === undefined) {
      return handlerInput.responseBuilder
        .speak(i18next.t(STRING_KEYS.PRINCIPALS_INTRO))
        .getResponse();
    }
  }
}