"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Alexa = __importStar(require("ask-sdk-core"));
const CancelIntent_1 = require("./intent-handlers/CancelIntent");
const EmployeeCountIntent_1 = require("./intent-handlers/EmployeeCountIntent");
const HelpIntent_1 = require("./intent-handlers/HelpIntent");
const IntentReflextion_1 = require("./intent-handlers/IntentReflextion");
const Launch_1 = require("./intent-handlers/Launch");
const PetCountIntent_1 = require("./intent-handlers/PetCountIntent");
const PrincipalsIntent_1 = require("./intent-handlers/PrincipalsIntent");
const SessionEnd_1 = require("./intent-handlers/SessionEnd");
const YesIntent_1 = require("./intent-handlers/YesIntent");
const LocalizationRequestInterceptor_1 = require("./interceptors/LocalizationRequestInterceptor");
// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(Launch_1.Launch, EmployeeCountIntent_1.EmployeeCountIntent, PetCountIntent_1.PetCountIntent, PrincipalsIntent_1.PrincipalsIntent, HelpIntent_1.HelpIntent, CancelIntent_1.CancelIntent, YesIntent_1.YesIntent, SessionEnd_1.SessionEndRequestHandler, IntentReflextion_1.IntentReflectionHandler // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers.
)
    .addRequestInterceptors(LocalizationRequestInterceptor_1.LocalizationRequestInterceptor)
    .addErrorHandlers(ErrorHandler)
    .lambda();
//# sourceMappingURL=index.js.map