"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => (request, response, next) => {
    const validated = schema.parse(request.body);
    response.locals = Object.assign(Object.assign({}, response.locals), { validated });
    return next();
};
exports.validateBody = validateBody;
