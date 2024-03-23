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
exports.destroy = exports.update = exports.read = exports.create = void 0;
const data_source_1 = require("../data-source");
const entities_1 = require("../entities");
const user_schema_1 = require("../schemas/user.schema");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = data_source_1.AppDataSource.getRepository(entities_1.User).create(payload);
    yield data_source_1.AppDataSource.getRepository(entities_1.User).save(user);
    return user_schema_1.userReturnSchema.parse(user);
});
exports.create = create;
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    return user_schema_1.userReadSchema.parse(yield data_source_1.AppDataSource.getRepository(entities_1.User).find());
});
exports.read = read;
const update = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(entities_1.User);
    const user = yield repo.findOneBy({ id: userId });
    const userUpdate = repo.create(Object.assign(Object.assign({}, user), payload));
    return user_schema_1.userReturnSchema.parse(userUpdate);
});
exports.update = update;
const destroy = (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.getRepository(entities_1.User).softRemove(user);
});
exports.destroy = destroy;
