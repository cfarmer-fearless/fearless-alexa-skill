import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { RequestTypes } from "../utils/constants";
import { isRequestType } from "../utils/helpers";

export const SessionEndRequestHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isRequestType(handlerInput, RequestTypes.SessionEnd);
  },
  handle(handlerInput: HandlerInput) {
    // Any cleanup logic goes here.
    return handlerInput.responseBuilder.getResponse();
  }
}