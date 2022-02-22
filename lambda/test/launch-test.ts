import { AlexaTest, LaunchRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';
import i18next from "i18next";
import { STRING_KEYS } from '../utils/constants';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('LaunchRequest', () => {
  describe('should show welcome message', () => {
    const responsePhrase = i18next.t(STRING_KEYS.WELCOME);
    alexaTest.test([
      {
        request: new LaunchRequestBuilder(skillSettings).build(),
        says: responsePhrase,
        reprompts: responsePhrase,
        shouldEndSession: false,
      },
    ]);
  });
});