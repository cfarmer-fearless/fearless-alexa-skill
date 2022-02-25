"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayPrincipal = exports.PrincipalsIntent = void 0;
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
        return (0, exports.sayPrincipal)(principalNumber, handlerInput, sessionAttributes);
    }
};
const sayPrincipal = (principal, handlerInput, sessionAttributes) => {
    switch (principal) {
        case '1st': {
            const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST);
            sessionAttributes.question = speakOutput;
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT))
                .getResponse();
        }
        case '2nd': {
            const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_SECOND);
            sessionAttributes.question = speakOutput;
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_SECOND_REPROMPT))
                .getResponse();
        }
        case '3rd': {
            const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_THIRD);
            sessionAttributes.question = speakOutput;
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_THIRD_REPROMPT))
                .getResponse();
        }
        case '4th': {
            const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FOURTH);
            sessionAttributes.question = speakOutput;
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
        default:
            break;
    }
};
exports.sayPrincipal = sayPrincipal;
//# sourceMappingURL=PrincipalsIntent.js.map