import { allBooks, bookDetails, deleteBook, newBook, updateBook } from "@/controllers/books.controllers";
import { Router } from "express";

const booksRouter = Router();

booksRouter.post('/book/', newBook);
booksRouter.get('/book/:id', bookDetails);
booksRouter.put('/book/:id', updateBook);
booksRouter.delete('/book/:id', deleteBook);

booksRouter.get('/books', allBooks);

export default booksRouter;