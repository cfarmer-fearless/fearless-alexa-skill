"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestType = void 0;
const isRequestType = (handlerInput, type) => {
    return handlerInput.requestEnvelope.request.type === type;
};
exports.isRequestType = isRequestType;
//# sourceMappingURL=helpers.js.map