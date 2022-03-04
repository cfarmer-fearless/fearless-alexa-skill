"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpIntent = void 0;
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
const i18next_1 = __importDefault(require("i18next"));
exports.HelpIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Help);
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(i18next_1.default.t(constants_1.STRING_KEYS.HELP))
            .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.HELP_REPROMPT))
            .getResponse();
    }
};
//# sourceMappingURL=HelpIntent.js.map