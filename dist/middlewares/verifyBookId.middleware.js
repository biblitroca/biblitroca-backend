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
exports.verifyBookIdExists = void 0;
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const error_1 = require("../error");
const verifyBookIdExists = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = +request.params.id;
    const repo = data_source_1.AppDataSource.getRepository(entities_1.Book);
    const book = yield repo.findOneBy({ id: bookId });
    if (!book) {
        throw new error_1.AppError("Book not found", 404);
    }
    response.locals = Object.assign(Object.assign({}, response.locals), { book: book });
    return next();
});
exports.verifyBookIdExists = verifyBookIdExists;
