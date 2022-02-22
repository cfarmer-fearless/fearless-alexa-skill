"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
const constants_1 = require("./constants");
exports.strings = {
    [constants_1.LocaleTypes.enUS]: {
        translation: {
            WELCOME: 'Welcome to Fearless!  Where we make software with a soul.  Do you want to hear more about it?',
            EMPLOYEE_COUNT: (count) => `Fearless currently has ${count} team members.`,
            PET_COUNT: (count, pet) => `There are ${count} ${pet} owners at Fearless Baltimore.`,
            PET_COUNT_UNKNOWN_PET: (pet) => `I am not sure how many ${pet} owners are at Fearless Baltimore.`,
            PET_COUNT_UNKNOWN_PET_REPROMPT: 'What kind of pet?'
        }
    }
};
//# sourceMappingURL=strings.js.map