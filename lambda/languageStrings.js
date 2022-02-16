const EN = {
  responses: {
    launchRequest: {
      WELCOME:
        "Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?",
    },
    employeeCountIntent: {
      COUNT: (count) => `Fearless currently has ${count} team members.`,
    },
    petCountIntent: {
      COUNT: (petCount, pet) =>
        `There are ${petCount} ${pet} owners at Fearless Baltimore`,
      UNKNOWN_PET: (pet) =>
        `I am not sure how many ${pet} owners are at Fearless Baltimore.`,
      UNSPECIFIED_PET:
        "Sorry, I did not understand the pet you requested.  What is the type of pet?",
    },
  },
};

exports.EN = EN;
