"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const user_schema_1 = require("./user.schema");
exports.sessionSchema = user_schema_1.userSchema.pick({ email: true, password: true });
