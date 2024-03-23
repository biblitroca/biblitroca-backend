"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const error_1 = require("../error");
const verifyToken = (request, response, next) => {
    const authorization = request.headers.authorization;
    if (!authorization) {
        throw new error_1.AppError("Missing bearer token", 401);
    }
    const token = authorization.split(" ")[1];
    (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new error_1.AppError(error.message, 401);
        }
        response.locals = Object.assign(Object.assign({}, response.locals), { decoded });
    });
    return next();
};
exports.verifyToken = verifyToken;
