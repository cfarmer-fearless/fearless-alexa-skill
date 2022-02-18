import { AlexaTest, LaunchRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('LaunchRequest', () => {
  describe('should show welcome message', () => {
    const responsePhrase =
    "Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?";
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