import { HandlerInput } from "ask-sdk-core";

export const isRequestType = (handlerInput: HandlerInput, type: string): boolean => {
  return handlerInput.requestEnvelope.request.type === type;
}