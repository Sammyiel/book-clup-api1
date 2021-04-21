import express from "express";
import booksRouter from "./booksRouter.js";
import membersRouter from "./membersRouter.js";
import borrowingsRouter from "./borrowingsRouter.js";

const router = express.Router();

router.use("/borrowings", borrowingsRouter);

router.use("/books", booksRouter);

router.use("/members", membersRouter);

export default router;