"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const users_routers_1 = require("./routers/users.routers");
const session_routers_1 = require("./routers/session.routers");
const books_routers_1 = require("./routers/books.routers");
const handleErrors_middleware_1 = require("./middlewares/handleErrors.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_routers_1.usersRouter);
app.use("/login", session_routers_1.sessionRouter);
app.use("/books", books_routers_1.booksRouter);
app.use(handleErrors_middleware_1.handleError);
exports.default = app;
