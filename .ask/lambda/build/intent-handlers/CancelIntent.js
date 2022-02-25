"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelIntent = void 0;
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.CancelIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Cancel) || (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Stop);
    },
    handle(handlerInput) {
        const speakOutput = "Goodbye!";
        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    }
};
//# sourceMappingURL=CancelIntent.js.map