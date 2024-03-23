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
exports.deleteUser = exports.patchUser = exports.getUsers = exports.postUser = void 0;
const users_services_1 = require("../services/users.services");
const postUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, users_services_1.create)(request.body);
    return response.status(201).json(user);
});
exports.postUser = postUser;
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, users_services_1.read)();
    return response.status(200).json(users);
});
exports.getUsers = getUsers;
const patchUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = response.locals.validated;
    const foundUser = +request.params.id;
    const user = yield (0, users_services_1.update)(foundUser, payload);
    return response.status(200).json(user);
});
exports.patchUser = patchUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, users_services_1.destroy)(response.locals.user);
    return response.status(204).json();
});
exports.deleteUser = deleteUser;
