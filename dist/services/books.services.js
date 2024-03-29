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
exports.destroy = exports.read = exports.create = void 0;
const book_schema_1 = require("./../schemas/book.schema");
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(entities_1.Book);
    const book = repo.create(payload);
    yield repo.save(book);
    return book_schema_1.bookSchema.parse(book);
});
exports.create = create;
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(entities_1.Book);
    const book = yield repo.find();
    return book;
});
exports.read = read;
const destroy = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(entities_1.Book);
    yield repo.remove(book);
});
exports.destroy = destroy;
