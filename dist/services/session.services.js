"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogin = void 0;
const bcryptjs_1 = require("bcryptjs");
const entities_1 = require("../entities");
const jsonwebtoken_1 = require("jsonwebtoken");
const data_source_1 = require("../data-source");
const error_1 = require("../error");
const createLogin = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
    const foundUser = yield data_source_1.AppDataSource.getRepository(entities_1.User).findOneBy({ email });
    if (!foundUser) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const samePassword = yield (0, bcryptjs_1.compare)(password, foundUser.password);
    if (!samePassword) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ admin: foundUser.admin }, process.env.SECRET_KEY, { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN });
    return { token };
});
exports.createLogin = createLogin;
