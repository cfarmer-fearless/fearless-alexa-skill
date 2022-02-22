import { HandlerInput, RequestHandler } from "ask-sdk-core";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const EmployeeCountIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.EmployeeCount);
  },
  handle(handlerInput: HandlerInput) {
    const count = 192;
    const speakOutput = i18next.t(STRING_KEYS.EMPLOYEE_COUNT, { count });

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  } 
}