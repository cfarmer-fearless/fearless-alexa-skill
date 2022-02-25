"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_test_1 = require("ask-sdk-test");
const index_1 = require("../index");
const constants_1 = require("../utils/constants");
const i18next_1 = __importDefault(require("i18next"));
const skillSettings = {
    appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
    userId: 'amzn1.ask.account.VOID',
    deviceId: 'amzn1.ask.device.VOID',
    locale: 'en-US'
};
const alexaTest = new ask_sdk_test_1.AlexaTest(index_1.handler, skillSettings);
describe('PrincipalsIntent', () => {
    describe('should say intro when no principal number provided', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO),
                shouldEndSession: false
            }
        ]);
    });
    describe('should say first principal and reprompt to say second principal', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals)
                    .withSlot("number", "1st")
                    .build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
                shouldEndSession: false
            }
        ]);
    });
    describe('should say first principal after yes response to intro', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_INTRO),
                shouldEndSession: false
            },
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Yes).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
                shouldEndSession: false
            }
        ]);
    });
    describe('should say second principal after yes response to first principal', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals).withSlot('number', '1st').build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
                shouldEndSession: false
            },
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Yes).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_SECOND),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_SECOND_REPROMPT),
                shouldEndSession: false
            }
        ]);
    });
    describe('should say third principal after yes response to second principal', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals).withSlot('number', '2nd').build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
                shouldEndSession: false
            },
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Yes).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_THIRD),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_THIRD_REPROMPT),
                shouldEndSession: false
            }
        ]);
    });
    describe('should say fourth principal after yes response to third principal', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Principals).withSlot('number', '3rd').build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST),
                reprompts: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
                shouldEndSession: false
            },
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, constants_1.IntentTypes.Yes).build(),
                says: i18next_1.default.t(constants_1.STRING_KEYS.PRINCIPALS_FOURTH)
            }
        ]);
    });
});
//# sourceMappingURL=principals-intent-test.js.map