import { AlexaTest, IntentRequestBuilder, LaunchRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';
import i18next from "i18next";
import { IntentTypes, STRING_KEYS } from '../utils/constants';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('HelpIntent', () => {
  describe('should say help message and help reprompt', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(skillSettings, IntentTypes.Help).build(),
        says: i18next.t(STRING_KEYS.HELP),
        reprompts: i18next.t(STRING_KEYS.HELP_REPROMPT),
        shouldEndSession: false,
      },
    ]);
  });
});