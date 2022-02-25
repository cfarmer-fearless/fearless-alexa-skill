"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentReflectionHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.IntentReflectionHandler = {
    canHandle(handleInput) {
        return (0, helpers_1.isRequestType)(handleInput, constants_1.RequestTypes.Intent);
    },
    handle(handlerInput) {
        const intentName = (0, ask_sdk_core_1.getIntentName)(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;
        return (handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse());
    }
};
//# sourceMappingURL=IntentReflextion.js.map