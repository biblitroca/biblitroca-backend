"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const error_1 = require("../error");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
const handleError = (error, request, response, next) => {
    if (error instanceof error_1.AppError) {
        return response.status(error.status).json({ message: error.message });
    }
    if (error instanceof zod_1.z.ZodError) {
        return response.status(400).json({ message: error.flatten().fieldErrors });
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return response.status(401).json({ message: error.message });
    }
    console.error(error);
    return response.status(500).json({ message: "Internal Server Error." });
};
exports.handleError = handleError;
