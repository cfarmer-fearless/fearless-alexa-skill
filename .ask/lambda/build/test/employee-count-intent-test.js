"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ask_sdk_test_1 = require("ask-sdk-test");
const index_1 = require("../index");
const chai_1 = require("chai");
const skillSettings = {
    appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
    userId: 'amzn1.ask.account.VOID',
    deviceId: 'amzn1.ask.device.VOID',
    locale: 'en-US'
};
const alexaTest = new ask_sdk_test_1.AlexaTest(index_1.handler, skillSettings);
describe('EmployeeCountIntent', () => {
    describe('should say employee count', () => {
        const regexEmployeeCountResponse = /[<speak>]Fearless currently has \d{3} team members[.</speak>]/;
        alexaTest.test([
            {
                request: new ask_sdk_test_1.IntentRequestBuilder(skillSettings, "EmployeeCountIntent").build(),
                callback: (response) => {
                    const match = regexEmployeeCountResponse.test(response.response.outputSpeech['ssml'] // Normal dot operator not working for some reason.
                    );
                    chai_1.assert.isTrue(match);
                },
            },
        ]);
    });
});
//# sourceMappingURL=employee-count-intent-test.js.map