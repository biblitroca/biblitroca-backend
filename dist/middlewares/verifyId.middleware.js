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
exports.verifyId = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const error_1 = require("../error");
const verifyId = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(request.params.id);
    const user = yield data_source_1.AppDataSource.getRepository(entities_1.User).findOneBy({
        id,
    });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    response.locals = Object.assign(Object.assign({}, response.locals), { user });
    return next();
});
exports.verifyId = verifyId;
