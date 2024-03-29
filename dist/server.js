"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Server is running");
    const PORT = Number(process.env.PORT) || 3000;
    app_1.default.listen(PORT, () => {
        console.log("Servidor executando");
    });
})
    .catch((error) => {
    console.error("Error during Data Source initialization", error);
});
