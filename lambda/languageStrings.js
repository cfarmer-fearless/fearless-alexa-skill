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
      COUNT: (count, pet) =>
        `There are ${petCount} ${pet} owners at Fearless Baltimore`,
      UNKNOWN_PET: (pet) =>
        `I am not sure how many ${pet} owners are at Fearless Baltimore.`,
    },
  },
};

exports.EN = EN;
