"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_test_1 = require("ask-sdk-test");
const index_1 = require("../index");
const i18next_1 = __importDefault(require("i18next"));
const constants_1 = require("../utils/constants");
const skillSettings = {
    appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
    userId: 'amzn1.ask.account.VOID',
    deviceId: 'amzn1.ask.device.VOID',
    locale: 'en-US'
};
const alexaTest = new ask_sdk_test_1.AlexaTest(index_1.handler, skillSettings);
describe('HelpIntent', () => {
    describe('should say help message and help reprompt', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Help).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.HELP),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.HELP_REPROMPT),
                shouldEndSession: false,
            },
        ]);
    });
});
//# sourceMappingURL=help-intent-test.js.map