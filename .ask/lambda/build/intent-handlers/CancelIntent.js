"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelIntent = void 0;
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.CancelIntent = {
    canHandle(handlerInput) {
        return ((0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Cancel) ||
            (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Stop));
    },
    handle(handlerInput) {
        const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.CANCEL);
        return handlerInput.responseBuilder.speak(speakOutput).getResponse();
    },
};
//# sourceMappingURL=CancelIntent.js.map