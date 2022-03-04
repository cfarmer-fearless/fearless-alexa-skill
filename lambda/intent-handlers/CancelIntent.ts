import { HandlerInput, RequestHandler } from "ask-sdk-core";
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from "../utils/constants";
import { isIntent } from "../utils/helpers";

export const CancelIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return (
      isIntent(handlerInput, IntentTypes.Cancel) ||
      isIntent(handlerInput, IntentTypes.Stop)
    );
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = i18next.t(STRING_KEYS.CANCEL);
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};
