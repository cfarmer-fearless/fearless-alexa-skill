import { AlexaTest, IntentRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';
import { IntentTypes, LocaleTypes, STRING_KEYS } from '../utils/constants';
import i18next from 'i18next';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('PrincipalsIntent', () => {
  describe('should say intro when no principal number provided', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(skillSettings, IntentTypes.Principals).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_INTRO),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_INTRO),
        shouldEndSession: false
      }
    ])
  });

  describe('should say first principal and reprompt to say second principal', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
        skillSettings, 
        IntentTypes.Principals)
          .withSlot("number", "1st")
          .build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FIRST),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPORMPT),
        shouldEndSession: false
      }
    ])
  });
});