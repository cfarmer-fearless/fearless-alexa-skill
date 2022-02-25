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
describe('LaunchRequest', () => {
    describe('should show welcome message', () => {
        const responsePhrase = i18next_1.default.t(constants_1.STRING_KEYS.WELCOME);
        alexaTest.test([
            {
                request: new ask_sdk_test_1.LaunchRequestBuilder(skillSettings).build(),
                says: responsePhrase,
                reprompts: responsePhrase,
                shouldEndSession: false,
            },
        ]);
    });
});
//# sourceMappingURL=launch-test.js.map