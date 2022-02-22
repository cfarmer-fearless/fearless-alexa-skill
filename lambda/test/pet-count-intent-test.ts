import { AlexaTest, IntentRequestBuilder, SkillSettings } from 'ask-sdk-test';
import { handler as skillHandler } from '../index';
import { LocaleTypes } from '../utils/constants';
import { strings } from '../utils/strings';
import { assert } from 'chai';

const skillSettings: SkillSettings = {
  appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
  userId: 'amzn1.ask.account.VOID',
  deviceId: 'amzn1.ask.device.VOID',
  locale: 'en-US'
};

const alexaTest = new AlexaTest(skillHandler, skillSettings);

describe('PetCountIntent', () => {
  describe('should say unprovided pet response', () => {
    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          "PetCountIntent"
        ).build(),
        reprompts: strings[LocaleTypes.enUS].translation.PET_COUNT_UNKNOWN_PET_REPROMPT,
        shouldEndSession: false,
      },
    ]);
  });

  describe("should return specific pet count after asking for kind of pet", () => {
    const animal = "bird";
    const regexPetCountResponse =
      /[<speak>]There are \d{2} bird owners at Fearless Baltimore[.</speak>]/;

    alexaTest.test([
      {
        request: new IntentRequestBuilder(
          skillSettings,
          "PetCountIntent"
        ).build(),
        reprompts: "What kind of pet?",
        shouldEndSession: false,
      },
      {
        request: new IntentRequestBuilder(skillSettings, "PetCountIntent")
          .withSlot("animal", animal)
          .build(),
        shouldEndSession: true,
        callback: (response) => {
          const match = regexPetCountResponse.test(
            response.response.outputSpeech['ssml']
          );
          assert.isTrue(match);
        },
      },
    ]);
  });
});