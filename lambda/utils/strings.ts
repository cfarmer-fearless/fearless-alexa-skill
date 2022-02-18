import { LocaleTypes } from "./constants";

interface Strings {
  WELCOME: string;
  EMPLOYEE_COUNT: (count: number) => string;
  PET_COUNT: (count: number, pet: string) => string;
  PET_COUNT_UNKNOWN_PET: (pet: string) => string;
  PET_COUNT_UNKNOWN_PET_REPROMPT: string;
}

export const strings = {
  [LocaleTypes.enUS]: {
    translation: {
      WELCOME: 'Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?',
      EMPLOYEE_COUNT: (count: number) => `Fearless currently has ${count} team members.`,
      PET_COUNT: (count: number, pet: string) => `There are ${count} ${pet} owners at Fearless Baltimore.`,
      PET_COUNT_UNKNOWN_PET: (pet: string) => `I am not sure how many ${pet} owners are at Fearless Baltimore.`,
      PET_COUNT_UNKNOWN_PET_REPROMPT: 'What kind of pet?'
    } as Strings
  }
}