"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = require("express");
const validateBody_middleware_1 = require("../middlewares/validateBody.middleware");
const session_schema_1 = require("../schemas/session.schema");
const session_controller_1 = require("../controllers/session.controller");
exports.sessionRouter = (0, express_1.Router)();
exports.sessionRouter.post("", (0, validateBody_middleware_1.validateBody)(session_schema_1.sessionSchema), session_controller_1.postLogin);
