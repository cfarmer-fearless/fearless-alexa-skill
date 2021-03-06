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
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
        shouldEndSession: false
      }
    ])
  });

  describe('should say first principal after yes response to intro', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Principals
        ).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_INTRO),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_INTRO),
        shouldEndSession: false
      },
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Yes
        ).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FIRST),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
        shouldEndSession: false
      }
    ]);
  });

  describe('should say second principal after yes response to first principal', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Principals
        ).withSlot('number', '1st').build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FIRST),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
        shouldEndSession: false
      },
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Yes
        ).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_SECOND),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_SECOND_REPROMPT),
        shouldEndSession: false
      }
    ]);
  });

  describe('should say third principal after yes response to second principal', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Principals
        ).withSlot('number', '2nd').build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FIRST),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
        shouldEndSession: false
      },
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Yes
        ).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_THIRD),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_THIRD_REPROMPT),
        shouldEndSession: false
      }
    ]);
  });

  describe('should say fourth principal after yes response to third principal', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Principals
        ).withSlot('number', '3rd').build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FIRST),
        reprompts: i18next.t(STRING_KEYS.PRINCIPALS_FIRST_REPROMPT),
        shouldEndSession: false
      },
      {
        request: new IntentRequestBuilder(
          skillSettings,
          IntentTypes.Yes
        ).build(),
        says: i18next.t(STRING_KEYS.PRINCIPALS_FOURTH)
      }
    ]);
  });
});