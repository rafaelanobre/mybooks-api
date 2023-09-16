import { Router } from "express";
import booksRouter from "./books.routes";

const router = Router();

router.use(booksRouter);

export default router;