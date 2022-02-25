"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCountIntent = void 0;
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.EmployeeCountIntent = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.EmployeeCount);
    },
    handle(handlerInput) {
        const count = 192;
        const speakOutput = i18next_1.default.t(constants_1.STRING_KEYS.EMPLOYEE_COUNT, { count });
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
//# sourceMappingURL=EmployeeCountIntent.js.map