"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YesIntent = void 0;
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
const PrincipalsIntent_1 = require("./PrincipalsIntent");
exports.YesIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Yes);
    },
    handle(handlerInput) {
        console.log('handling yes intent');
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const { question } = sessionAttributes;
        if (question === undefined) {
            const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.UNKNOWN_QUESTION);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
        switch (question) {
            case i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO):
                return (0, PrincipalsIntent_1.sayFirstPrincipal)(handlerInput, sessionAttributes);
            default:
                break;
        }
    }
};
//# sourceMappingURL=YesIntent.js.map