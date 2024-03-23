"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.User = void 0;
const users_entity_1 = __importDefault(require("./users.entity"));
exports.User = users_entity_1.default;
const books_entity_1 = __importDefault(require("./books.entity"));
exports.Book = books_entity_1.default;
