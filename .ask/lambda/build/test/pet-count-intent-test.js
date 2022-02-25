"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_test_1 = require("ask-sdk-test");
const index_1 = require("../index");
const constants_1 = require("../utils/constants");
const strings_1 = require("../utils/strings");
const chai_1 = require("chai");
const skillSettings = {
    appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
    userId: 'amzn1.ask.account.VOID',
    deviceId: 'amzn1.ask.device.VOID',
    locale: 'en-US'
};
const alexaTest = new ask_sdk_test_1.AlexaTest(index_1.handler, skillSettings);
describe('PetCountIntent', () => {
    describe('should say unprovided pet response', () => {
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, "PetCountIntent").build(),
                reprompts: strings_1.strings[constants_1.LocaleTypes.enUS].translation.PET_COUNT_UNKNOWN_PET_REPROMPT,
                shouldEndSession: false,
            },
        ]);
    });
    describe("should return specific pet count after asking for kind of pet", () => {
        const animal = "bird";
        const regexPetCountResponse = /[<speak>]There are \d{2} bird owners at Fearless Baltimore[.</speak>]/;
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, "PetCountIntent").build(),
                reprompts: "What kind of pet?",
                shouldEndSession: false,
            },
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, "PetCountIntent")
                    .withSlot("animal", animal)
                    .build(),
                shouldEndSession: true,
                callback: (response) => {
                    const match = regexPetCountResponse.test(response.response.outputSpeech['ssml']);
                    chai_1.assert.isTrue(match);
                },
            },
        ]);
    });
});
//# sourceMappingURL=pet-count-intent-test.js.map