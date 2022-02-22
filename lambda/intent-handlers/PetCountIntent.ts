import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { IntentRequest } from "ask-sdk-model";
import i18next from "i18next";
import { IntentTypes, LocaleTypes, STRING_KEYS } from "../utils/constants"
import { isIntent } from "../utils/helpers"

export const PetCountIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.PetCount);
  },
  handle(handlerInput: HandlerInput) {
    const pet =
      (handlerInput.requestEnvelope.request as IntentRequest).intent.slots?.animal.value;
    let speakOutput;

    if (pet === undefined) {
      speakOutput = i18next.t(STRING_KEYS.PET_COUNT_UNKNOWN_PET_REPROMPT);
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    }

    let petCount = undefined;

    switch (pet) {
      case "dog":
        petCount = 29;
        break;
      case "cat":
        petCount = 36;
        break;
      case "bird":
        petCount = 10;
        break;
    }

    if (petCount === undefined) {
      speakOutput = i18next.t(STRING_KEYS.PET_COUNT_UNKNOWN_PET, { pet });
    } else {
      speakOutput = i18next.t(STRING_KEYS.PET_COUNT, { pet, count: petCount });
    }

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withShouldEndSession(true)
      .getResponse();
  }
}