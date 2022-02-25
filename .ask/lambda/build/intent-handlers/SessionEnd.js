"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEndRequestHandler = void 0;
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
exports.SessionEndRequestHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isRequestType)(handlerInput, constants_1.RequestTypes.SessionEnd);
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};
//# sourceMappingURL=SessionEnd.js.map