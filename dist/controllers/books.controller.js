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
exports.deleteBook = exports.getBooks = exports.postBook = void 0;
const books_services_1 = require("../services/books.services");
const postBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const book = response.locals.validated;
    const newBook = yield (0, books_services_1.create)(book);
    return response.status(201).json(newBook);
});
exports.postBook = postBook;
const getBooks = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, books_services_1.read)();
    return response.status(200).json(books);
});
exports.getBooks = getBooks;
const deleteBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, books_services_1.destroy)(response.locals.book);
    console.log(response.locals.book);
    return response.status(204).json();
});
exports.deleteBook = deleteBook;
