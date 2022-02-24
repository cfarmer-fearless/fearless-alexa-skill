"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntent = exports.isRequestType = void 0;
const constants_1 = require("./constants");
const isRequestType = (handlerInput, type) => {
    return handlerInput.requestEnvelope.request.type === type;
};
exports.isRequestType = isRequestType;
const isIntent = (handlerInput, intentType) => {
    return handlerInput.requestEnvelope.request.type === constants_1.RequestTypes.Intent
        && handlerInput.requestEnvelope.request.intent.name === intentType;
};
exports.isIntent = isIntent;
//# sourceMappingURL=helpers.js.map