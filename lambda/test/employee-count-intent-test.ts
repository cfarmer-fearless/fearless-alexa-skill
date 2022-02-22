import { AlexaTest, IntentRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';
import { assert } from 'chai';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('EmployeeCountIntent', () => {
  describe('should say employee count', () => {
    const regexEmployeeCountResponse =
      /[<speak>]Fearless currently has \d{3} team members[.</speak>]/;
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          "EmployeeCountIntent"
        ).build(),
        callback: (response) => {
          const match = regexEmployeeCountResponse.test(
            response.response.outputSpeech['ssml'] // Normal dot operator not working for some reason.
          );
          assert.isTrue(match);
        },
      },
    ]);
  });
});