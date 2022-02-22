export enum RequestTypes {
  Launch = 'LaunchRequest',
  Intent = 'IntentRequest',
  SessionEnd = 'SessionEndedRequest'
};

export enum IntentTypes {
  // Built-in
  Help = 'AMAZON.HelpIntent',
  Cancel = 'AMAZON.CancelIntent',
  Stop = 'AMAZON.StopIntent',
  // Custom
  EmployeeCount = 'EmployeeCountIntent',
  PetCount = 'PetCountIntent',
  Principals = 'PrincipalsIntent'
}

export enum STRING_KEYS {
  WELCOME = 'WELCOME',
  EMPLOYEE_COUNT = 'EMPLOYEE_COUNT',
  PET_COUNT = 'PET_COUNT',
  PET_COUNT_UNKNOWN_PET = 'PET_COUNT_UNKNOWN_PET',
  PET_COUNT_UNKNOWN_PET_REPROMPT = 'PET_COUNT_UNKNOWN_PET_REPROMPT',
  PRINCIPALS_INTRO = 'PRINCIPALS_INTRO'
};

export enum LocaleTypes {
  enUS = 'en-US'
};