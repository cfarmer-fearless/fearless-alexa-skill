"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launch = void 0;
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.Launch = {
    canHandle(handlerInput) {
        return (0, helpers_1.isRequestType)(handlerInput, constants_1.RequestTypes.Launch);
    },
    handle(handlerInput) {
        const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.WELCOME);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
//# sourceMappingURL=Launch.js.map