import { HandlerInput, RequestHandler } from "ask-sdk-core";
import i18next from "i18next";
import { RequestTypes, STRING_KEYS } from "../utils/constants";
import { isRequestType } from "../utils/helpers";

export const Launch: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isRequestType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = i18next.t(STRING_KEYS.WELCOME);
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
}