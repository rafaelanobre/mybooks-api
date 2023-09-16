import { BookCreation } from "@/protocols/book.protocol";
import { bookRepository } from "@/repositories/books.repositories";

async function newBook(body: BookCreation){
    const {name, author} = body;
    await bookRepository.createBook(name, author);
}

async function allBooks() {
    const books = await bookRepository.getBooks();
    return books;
}

async function bookDetails(id: string) {
    const bookId = parseInt(id);
    const book = await bookRepository.getBookDetails(bookId);
    return book;
}

async function updateBook(id: string, body: BookCreation) {
    const bookId = parseInt(id);
    const {name, author} = body;

    await bookRepository.updateBookById(bookId, name, author);
}

async function deleteBook(id: string) {
    const bookId = parseInt(id);
    await bookRepository.deleteBookById(bookId);
}

export const bookService = { newBook, allBooks, bookDetails, updateBook, deleteBook }