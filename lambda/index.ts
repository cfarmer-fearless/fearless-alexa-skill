import * as Alexa from 'ask-sdk-core';
import { Launch } from "./intent-handlers/Launch";
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(Launch)
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .lambda();