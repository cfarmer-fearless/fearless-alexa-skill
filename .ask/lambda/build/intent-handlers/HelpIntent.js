"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpIntent = void 0;
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.HelpIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Help);
    },
    handle(handlerInput) {
        const speakOutput = "You can say hello to me! How can I help?";
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
//# sourceMappingURL=HelpIntent.js.map