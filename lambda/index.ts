import * as Alexa from 'ask-sdk-core';
import { CancelIntent } from './intent-handlers/CancelIntent';
import { EmployeeCountIntent } from './intent-handlers/EmployeeCountIntent';
import { HelpIntent } from './intent-handlers/HelpIntent';
import { IntentReflectionHandler } from './intent-handlers/IntentReflextion';
import { Launch } from "./intent-handlers/Launch";
import { PetCountIntent } from './intent-handlers/PetCountIntent';
import { SessionEndRequestHandler } from './intent-handlers/SessionEnd';
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`~~~~ Error handled: ${error.stack}`);
    const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    Launch, 
    EmployeeCountIntent, 
    PetCountIntent,
    HelpIntent,
    CancelIntent,
    SessionEndRequestHandler,
    IntentReflectionHandler // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers.
  )
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .addErrorHandlers(ErrorHandler)
  .lambda();