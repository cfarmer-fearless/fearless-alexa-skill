export enum RequestTypes {
  Launch = "LaunchRequest",
  Intent = "IntentRequest",
  SessionEnd = "SessionEndedRequest",
}

export enum IntentTypes {
  // Built-in
  Help = "AMAZON.HelpIntent",
  Cancel = "AMAZON.CancelIntent",
  Stop = "AMAZON.StopIntent",
  Yes = "AMAZON.YesIntent",
  No = "AMAZON.NoIntent",
  // Custom
  EmployeeCount = "EmployeeCountIntent",
  PetCount = "PetCountIntent",
  Principals = "PrincipalsIntent",
}

export enum STRING_KEYS {
  WELCOME = "WELCOME",
  EMPLOYEE_COUNT = "EMPLOYEE_COUNT",
  PET_COUNT = "PET_COUNT",
  PET_COUNT_UNKNOWN_PET = "PET_COUNT_UNKNOWN_PET",
  PET_COUNT_UNKNOWN_PET_REPROMPT = "PET_COUNT_UNKNOWN_PET_REPROMPT",
  PRINCIPALS_INTRO = "PRINCIPALS_INTRO",
  PRINCIPALS_FIRST = "PRINCIPALS_FIRST",
  PRINCIPALS_FIRST_REPROMPT = "PRINCIPALS_FIRST_REPROMPT",
  PRINCIPALS_SECOND = "PRINCIPALS_SECOND",
  PRINCIPALS_SECOND_REPROMPT = "PRINCIPALS_SECOND_REPROMPT",
  PRINCIPALS_THIRD = "PRINCIPALS_THIRD",
  PRINCIPALS_THIRD_REPROMPT = "PRINCIPALS_THIRD_REPROMPT",
  PRINCIPALS_FOURTH = "PRINCIPALS_FOURTH",
  UNKNOWN_QUESTION = "UNKNOWN_QUESTION",
  HELP = "HELP",
  HELP_REPROMPT = "HELP_REPROMPT",
}

export enum LocaleTypes {
  enUS = "en-US",
  esES = "es-ES",
}
