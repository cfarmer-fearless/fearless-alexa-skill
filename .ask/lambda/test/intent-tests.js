const assert = require("chai").assert;

const test = require("ask-sdk-test");
const skillHandler = require("../index").handler;

// initialize the testing framework
const skillSettings = {
  appId: "amzn1.ask.skill.00000000-0000-0000-0000-000000000000",
  userId: "amzn1.ask.account.VOID",
  deviceId: "amzn1.ask.device.VOID",
  locale: "es-US",
};

const alexaTest = new test.AlexaTest(skillHandler, skillSettings);

describe("Fearless Solutions Skill", () => {
  describe("LaunchRequest", () => {
    const responsePhrase =
      "Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?";
    alexaTest.test([
      {
        request: new test.LaunchRequestBuilder(skillSettings).build(),
        says: responsePhrase,
        reprompts: responsePhrase,
        shouldEndSession: false,
      },
    ]);
  });

  describe("EmployeeCountIntent", () => {
    const regexEmployeeCountResponse =
      /[<speak>]Fearless currently has \d{3} team members[.</speak>]/;
    alexaTest.test([
      {
        request: new test.IntentRequestBuilder(
          skillSettings,
          "EmployeeCountIntent"
        ).build(),
        callback: (response) => {
          const match = regexEmployeeCountResponse.test(
            response.response.outputSpeech.ssml
          );
          assert.isTrue(match);
        },
      },
    ]);
  });

  describe("PetCountIntent should return unprovided pet response", () => {
    alexaTest.test([
      {
        request: new test.IntentRequestBuilder(
          skillSettings,
          "PetCountIntent"
        ).build(),
        reprompts: "What kind of pet?",
        shouldEndSession: false,
      },
    ]);
  });
});
