import { HandlerInput } from "ask-sdk-core";
import { IntentTypes, RequestTypes } from "./constants";

export const isRequestType = (handlerInput: HandlerInput, type: string): boolean => {
  return handlerInput.requestEnvelope.request.type === type;
}

export const isIntent = (handlerInput: HandlerInput, intentType: IntentTypes): boolean => {
  return handlerInput.requestEnvelope.request.type === RequestTypes.Intent
    && handlerInput.requestEnvelope.request.intent.name === intentType;
}