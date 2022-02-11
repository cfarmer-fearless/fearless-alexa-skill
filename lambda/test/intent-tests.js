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
    alexaTest.test([
      {
        request: new test.LaunchRequestBuilder(skillSettings).build(),
        says: "Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?",
        reprompts:
          "Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?",
        shouldEndSession: false,
      },
    ]);
  });
});
