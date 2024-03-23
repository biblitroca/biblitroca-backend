"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookReadSchema = exports.bookCreateSchema = exports.bookSchema = void 0;
const zod_1 = require("zod");
exports.bookSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().max(100),
    author: zod_1.z.string().max(50),
    type: zod_1.z.string().max(6),
    price: zod_1.z.number().positive(),
});
exports.bookCreateSchema = exports.bookSchema.omit({ id: true });
exports.bookReadSchema = exports.bookSchema.array();
