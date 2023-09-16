import { allBooks, bookDetails, deleteBook, newBook, updateBook } from "@/controllers/books.controllers";
import validateSchema from "@/middlewares/validateSchema";
import { bookSchema } from "@/schemas/books.schemas";
import { Router } from "express";

const booksRouter = Router();

booksRouter.post('/book/', validateSchema(bookSchema), newBook);
booksRouter.get('/book/:id', bookDetails);
booksRouter.put('/book/:id', validateSchema(bookSchema), updateBook);
booksRouter.delete('/book/:id', deleteBook);

booksRouter.get('/books', allBooks);

export default booksRouter;