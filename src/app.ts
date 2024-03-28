import "express-async-errors";
import express, { Application } from "express";
import { usersRouter } from "./routers/users.routers";
import { sessionRouter } from "./routers/session.routers";
import { booksRouter } from "./routers/books.routers";
import { handleError } from "./middlewares/handleErrors.middleware";

const app: Application = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const swaggerDoc = require("swagger-ui-express");
const swaggerDocumentation = require("./helper/documentation.js");
app.use("/documentations", swaggerDoc.serve);
app.use("/documentations", swaggerDoc.setup(swaggerDocumentation));

app.use("/users", usersRouter);

app.use("/login", sessionRouter);

app.use("/books", booksRouter);

app.use(handleError);

export default app;
