"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetCountIntent = void 0;
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.PetCountIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.PetCount);
    },
    handle(handlerInput) {
        var _a;
        const pet = (_a = handlerInput.requestEnvelope.request.intent.slots) === null || _a === void 0 ? void 0 : _a.animal.value;
        let speakOutput;
        if (pet === undefined) {
            speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PET_COUNT_UNKNOWN_PET_REPROMPT);
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
        let petCount = undefined;
        switch (pet) {
            case "dog":
                petCount = 29;
                break;
            case "cat":
                petCount = 36;
                break;
            case "bird":
                petCount = 10;
                break;
        }
        if (petCount === undefined) {
            speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PET_COUNT_UNKNOWN_PET, { pet });
        }
        else {
            speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.PET_COUNT, { pet, count: petCount });
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(true)
            .getResponse();
    }
};
//# sourceMappingURL=PetCountIntent.js.map