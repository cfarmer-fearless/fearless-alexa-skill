"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayFirstPrincipal = exports.PrincipalsIntent = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.PrincipalsIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.Principals);
    },
    handle(handlerInput) {
        const principalNumber = (0, ask_sdk_core_1.getSlotValue)(handlerInput.requestEnvelope, 'number');
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        if (principalNumber === null || principalNumber === undefined) {
            sessionAttributes.question = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO);
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
                .speak(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO))
                .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO))
                .getResponse();
        }
        switch (principalNumber) {
            case '1st':
                return (0, exports.sayFirstPrincipal)(handlerInput, sessionAttributes);
            default:
                break;
        }
    }
};
const sayFirstPrincipal = (handlerInput, sessionAttributes) => {
    sessionAttributes.question = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST);
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    return handlerInput.responseBuilder
        .speak(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST))
        .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPORMPT))
        .getResponse();
};
exports.sayFirstPrincipal = sayFirstPrincipal;
//# sourceMappingURL=PrincipalsIntent.js.map