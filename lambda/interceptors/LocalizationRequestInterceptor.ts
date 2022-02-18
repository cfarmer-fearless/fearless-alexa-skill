import { RequestInterceptor } from "ask-sdk-core"
import i18next from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor'
import { strings } from "../utils/strings"

export const LocalizationRequestInterceptor: RequestInterceptor = {
  process(handlerInput) {
    i18next.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: strings,
      returnObjects: true
    });
  }
};