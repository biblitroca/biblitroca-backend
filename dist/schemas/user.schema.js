"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateSchema = exports.userReadSchema = exports.userReturnSchema = exports.userCreateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().max(45),
    email: zod_1.z.string().email().max(45),
    admin: zod_1.z.boolean().default(() => false),
    password: zod_1.z.string().max(120),
    createdAt: zod_1.z.string().or(zod_1.z.date()),
    updatedAt: zod_1.z.string().or(zod_1.z.date()),
    deletedAt: zod_1.z.string().or(zod_1.z.date()).nullable(),
});
exports.userCreateSchema = exports.userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});
exports.userReturnSchema = exports.userSchema.omit({ password: true });
exports.userReadSchema = exports.userReturnSchema.array();
exports.userUpdateSchema = exports.userCreateSchema
    .omit({ admin: true })
    .partial();
