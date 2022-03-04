import { LocaleTypes } from "./constants";

const helpMessageBody =
  "Say <emphasis>culture</emphasis> or <emphasis>principals</emphasis> to learn about our culture.  Say <emphasis>employees</emphasis> to learn how many people currentle work here.  What would you like to do?";

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
  HELP: string;
  HELP_REPROMPT: string;
  CANCEL: string;
}

export const strings = {
  [LocaleTypes.enUS]: {
    translation: {
      WELCOME:
        "Welcome to Fearless!  Where we make software with a soul.  I can tell you many things to give you an idea about the company and what we do.  You can say <emphasis>culture</emphasis> to hear more about our cultural beliefs.  If you are lost, just say <emphasis>help</emphasis>. What would you like to do?",
      EMPLOYEE_COUNT: "Fearless currently has {{count}} team members.",
      PET_COUNT: "There are {{count}} {{pet}} owners at Fearless Baltimore.",
      PET_COUNT_UNKNOWN_PET:
        "I am not sure how many {{pet}} owners are at Fearless Baltimore.",
      PET_COUNT_UNKNOWN_PET_REPROMPT: "What kind of pet?",
      PRINCIPALS_INTRO:
        "At the foundation of Fearless culture are four principals.  First, create belonging.  Second, make an impact.  Third, encourage open dialog.  And fourth, take initiative.  Say first principal, second principal, third principal, or fourth principal to hear more about them.  Would you like to hear the first principal?",
      PRINCIPALS_FIRST:
        "The first principal is to create belonging.  This means we strive to create a place of trust and safety.  This allows people to be their authentic selves and reach their full potentials.  It also means that we have eachothers backs, no matter what project we are on.  Would you like to hear the second principal?",
      PRINCIPALS_FIRST_REPROMPT: "Would you like to hear the second principal?",
      PRINCIPALS_SECOND:
        "The second principal is to make an impact.  We strive for building digital services that can change the world for the better.  We also believe that this work is done best when we feel our best.  We respect holidays and time off, and applaud those who have achieved effective work life balances.  Would you like to hear the third principal?",
      PRINCIPALS_SECOND_REPROMPT: "Would you like to hear the third principal?",
      PRINCIPALS_THIRD:
        "The third principal is to encourage open dialog.  At Fearless, we are not afraid to have hard conversations, or answer hard questions.  We encourage our team members and customers to have these conversations because we believe better things will come out of them.  We assume good intentions, and believe everyone is trying to better themselves and the company.  Do you want to hear the fourth principal?",
      PRINCIPALS_THIRD_REPROMPT: "Do you want to hear the fourth principal?",
      PRINCIPALS_FOURTH:
        "The fourth principal is to take initiative.  At Fearless, people are not limited by their job title.  We believe anyone is capable to take the lead on a task that can create change.  We encourage team members to explore new ideas and opportinities, even if it is outside of their comfort zone.",
      UNKNOWN_QUESTION: "Sorry, I am not sure what you are referring to",
      HELP: `Let me help you learn more about Fearless.  ${helpMessageBody}`,
      HELP_REPROMPT: helpMessageBody,
      CANCEL: "Goodbye!",
    } as Strings,
  },
  [LocaleTypes.esES]: {
    translation: {
      WELCOME:
        "¡Bienvenidos a Fearless! Donde hacemos software con alma. Puedo contarte muchas cosas para darte una idea de la empresa y de lo que hacemos. Puede decir <emphasis>cultura</emphasis> para escuchar más sobre nuestras creencias culturales. Si estás perdido, solo di <emphasis>ayuda</emphasis>. Que te gustaría hacer?",
      EMPLOYEE_COUNT:
        "Fearless actualmente tiene {{count}} miembros del equipo.",
      PET_COUNT: "Hay {{count}} {{pet}} propietarios en Fearless.",
      PET_COUNT_UNKNOWN_PET:
        "No estoy seguro de cuántos {{pet}} propietarios hay en Fearless.",
      PET_COUNT_UNKNOWN_PET_REPROMPT: "¿Qué tipo de mascota?",
      PRINCIPALS_INTRO:
        "At the foundation of Fearless culture are four principals.  First, create belonging.  Second, make an impact.  Third, encourage open dialog.  And fourth, take initiative.  Say first principal, second principal, third principal, or fourth principal to hear more about them.  Would you like to hear the first principal?",
      PRINCIPALS_FIRST:
        "The first principal is to create belonging.  This means we strive to create a place of trust and safety.  This allows people to be their authentic selves and reach their full potentials.  It also means that we have eachothers backs, no matter what project we are on.  Would you like to hear the second principal?",
      PRINCIPALS_FIRST_REPROMPT: "Would you like to hear the second principal?",
      PRINCIPALS_SECOND:
        "The second principal is to make an impact.  We strive for building digital services that can change the world for the better.  We also believe that this work is done best when we feel our best.  We respect holidays and time off, and applaud those who have achieved effective work life balances.  Would you like to hear the third principal?",
      PRINCIPALS_SECOND_REPROMPT: "Would you like to hear the third principal?",
      PRINCIPALS_THIRD:
        "The third principal is to encourage open dialog.  At Fearless, we are not afraid to have hard conversations, or answer hard questions.  We encourage our team members and customers to have these conversations because we believe better things will come out of them.  We assume good intentions, and believe everyone is trying to better themselves and the company.  Do you want to hear the fourth principal?",
      PRINCIPALS_THIRD_REPROMPT: "Do you want to hear the fourth principal?",
      PRINCIPALS_FOURTH:
        "The fourth principal is to take initiative.  At Fearless, people are not limited by their job title.  We believe anyone is capable to take the lead on a task that can create change.  We encourage team members to explore new ideas and opportinities, even if it is outside of their comfort zone.",
      UNKNOWN_QUESTION: "Sorry, I am not sure what you are referring to",
      HELP: `Let me help you learn more about Fearless.  ${helpMessageBody}`,
      HELP_REPROMPT: helpMessageBody,
      CANCEL: "Adios!",
    } as Strings,
  },
};
