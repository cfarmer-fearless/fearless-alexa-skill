import { LocaleTypes } from "./constants";

interface Strings {
  WELCOME: string;
  EMPLOYEE_COUNT: string;
  PET_COUNT: string;
  PET_COUNT_UNKNOWN_PET: string;
  PET_COUNT_UNKNOWN_PET_REPROMPT: string;
  PRINCIPALS_INTRO: string;
  PRINCIPALS_FIRST: string;
  PRINCIPALS_FIRST_REPROMPT: string;
  PRINCIPALS_SECOND: string;
  PRINCIPALS_SECOND_REPROMPT: string;
  PRINCIPALS_THIRD: string;
  PRINCIPALS_THIRD_REPROMPT: string;
  PRINCIPALS_FOURTH: string;
  UNKNOWN_QUESTION: string;
}

export const strings = {
  [LocaleTypes.enUS]: {
    translation: {
      WELCOME: 'Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?',
      EMPLOYEE_COUNT: 'Fearless currently has {{count}} team members.',
      PET_COUNT: 'There are {{count}} {{pet}} owners at Fearless Baltimore.',
      PET_COUNT_UNKNOWN_PET: 'I am not sure how many {{pet}} owners are at Fearless Baltimore.',
      PET_COUNT_UNKNOWN_PET_REPROMPT: 'What kind of pet?',
      PRINCIPALS_INTRO: 'At the foundation of Fearless culture are four principals.  First, create belonging.  Second, make an impact.  Third, encourage open dialog.  And fourth, take initiative.  Say first, second, third, or fourth to hear more about them.  Would you like to hear the first principal?',
      PRINCIPALS_FIRST: 'The first principal is to create belonging.  There are many different groups and communities at Fearless.  We encourage our team members to find ones they like, or make their own.  Would you like to hear the second principal?',
      PRINCIPALS_FIRST_REPROMPT: 'Would you like to hear the second principal?',
      PRINCIPALS_SECOND: 'The second principal is to make an impact.  We strive for building digital services that can change the world for the better.  We also believe that anyone has the power to make change.  Either in the office or a community.  Would you like to hear the third principal?',
      PRINCIPALS_SECOND_REPROMPT: 'Would you like to hear the third principal?',
      PRINCIPALS_THIRD: 'The third principal is to encourage open dialog.  At Fearless, we are not afraid to have hard conversations, or answer hard questions.  We encourage our team members and customers to have these conversations because we believe better things will come out of them.  Do you want to hear the fourth principal?',
      PRINCIPALS_THIRD_REPROMPT: 'Do you want to hear the fourth principal?',
      PRINCIPALS_FOURTH: 'The fourth principal is to take initiative.  At Fearless, people are not limited by their job title.  We believe anyone is capable to take the lead on a task that can create change.  We encourage team members to explore new ideas and opportinities, even if it is outside of their comfort zone.',
      UNKNOWN_QUESTION: 'Sorry, I am not sure what you are referring to'
    } as Strings
  }
}