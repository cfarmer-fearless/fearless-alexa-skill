"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleTypes = exports.STRING_KEYS = exports.IntentTypes = exports.RequestTypes = void 0;
var RequestTypes;
(function (RequestTypes) {
    RequestTypes["Launch"] = "LaunchRequest";
    RequestTypes["Intent"] = "IntentRequest";
    RequestTypes["SessionEnd"] = "SessionEndedRequest";
})(RequestTypes = exports.RequestTypes || (exports.RequestTypes = {}));
;
var IntentTypes;
(function (IntentTypes) {
    // Built-in
    IntentTypes["Help"] = "AMAZON.HelpIntent";
    IntentTypes["Cancel"] = "AMAZON.CancelIntent";
    IntentTypes["Stop"] = "AMAZON.StopIntent";
    // Custom
    IntentTypes["EmployeeCount"] = "EmployeeCountIntent";
    IntentTypes["PetCount"] = "PetCountIntent";
    IntentTypes["Principals"] = "PrincipalsIntent";
})(IntentTypes = exports.IntentTypes || (exports.IntentTypes = {}));
var STRING_KEYS;
(function (STRING_KEYS) {
    STRING_KEYS["WELCOME"] = "WELCOME";
    STRING_KEYS["EMPLOYEE_COUNT"] = "EMPLOYEE_COUNT";
    STRING_KEYS["PET_COUNT"] = "PET_COUNT";
    STRING_KEYS["PET_COUNT_UNKNOWN_PET"] = "PET_COUNT_UNKNOWN_PET";
    STRING_KEYS["PET_COUNT_UNKNOWN_PET_REPROMPT"] = "PET_COUNT_UNKNOWN_PET_REPROMPT";
    STRING_KEYS["PRINCIPALS_INTRO"] = "PRINCIPALS_INTRO";
    STRING_KEYS["PRINCIPALS_FIRST"] = "PRINCIPALS_FIRST";
    STRING_KEYS["PRINCIPALS_FIRST_REPORMPT"] = "PRINCIPALS_FIRST_REPROMPT";
})(STRING_KEYS = exports.STRING_KEYS || (exports.STRING_KEYS = {}));
;
var LocaleTypes;
(function (LocaleTypes) {
    LocaleTypes["enUS"] = "en-US";
})(LocaleTypes = exports.LocaleTypes || (exports.LocaleTypes = {}));
;
//# sourceMappingURL=constants.js.map