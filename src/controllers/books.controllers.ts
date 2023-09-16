import { BookCreation } from "@/protocols/book.protocol";
import { bookService } from "@/services/books.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function newBook(req: Request, res: Response){
    await bookService.newBook(req.body as BookCreation);
    res.status(httpStatus.CREATED).send("Livro criado com sucesso!");
}

export async function allBooks(req: Request, res: Response){
    const books = await bookService.allBooks();
    res.status(httpStatus.OK).send(books);
}

export async function bookDetails(req: Request, res: Response){
    const { id } = req.params;
    const book = await bookService.bookDetails(id);
    res.status(httpStatus.OK).send(book);
}

export async function updateBook(req: Request, res: Response){
    const { id } = req.params;
    await bookService.updateBook(id, req.body as BookCreation);
    res.status(httpStatus.OK).send("Livro atualizado com sucesso!");
}

export async function deleteBook(req: Request, res: Response){
    const { id } = req.params;
    await bookService.deleteBook(id);
    res.status(httpStatus.OK).send("Livro deletado com sucesso!");
}