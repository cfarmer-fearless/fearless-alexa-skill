import { getIntentName, HandlerInput, RequestHandler } from "ask-sdk-core";
import { RequestTypes } from "../utils/constants";
import { isRequestType } from "../utils/helpers";

export const IntentReflectionHandler: RequestHandler = {
  canHandle(handleInput: HandlerInput) {
    return isRequestType(handleInput, RequestTypes.Intent);
  },
  handle(handlerInput: HandlerInput) {
    const intentName = getIntentName(handlerInput.requestEnvelope);
    const speakOutput = `You just triggered ${intentName}`;

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  } 
}