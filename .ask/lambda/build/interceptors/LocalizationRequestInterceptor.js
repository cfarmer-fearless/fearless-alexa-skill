"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizationRequestInterceptor = void 0;
const i18next_1 = __importDefault(require("i18next"));
const i18next_sprintf_postprocessor_1 = __importDefault(require("i18next-sprintf-postprocessor"));
const strings_1 = require("../utils/strings");
exports.LocalizationRequestInterceptor = {
    process(handlerInput) {
        i18next_1.default.use(i18next_sprintf_postprocessor_1.default).init({
            lng: handlerInput.requestEnvelope.request.locale,
            overloadTranslationOptionHandler: i18next_sprintf_postprocessor_1.default.overloadTranslationOptionHandler,
            resources: strings_1.strings,
            returnObjects: true
        });
    }
};
//# sourceMappingURL=LocalizationRequestInterceptor.js.map