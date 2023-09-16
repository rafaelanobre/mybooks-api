import { connection } from "@/database/database.connection";
import { Book } from "@/protocols/book.protocol";

async function createBook(name: string, author: string) {
    await connection.query(`INSERT INTO books (name, author) VALUES($1, $2)`, [name, author]);
}

async function getBooks() {
    const books = await connection.query<Book[]>(`SELECT * FROM books ORDER BY name ASC`);
    return books.rows;
}

async function getBookDetails(id: number) {
    const book = await connection.query<Book>(`SELECT * FROM books WHERE id=$1`,[id]);
    return book.rows[0
    ];
}

async function updateBookById(id:number, name:string, author:string) {
    await connection.query(`UPDATE books SET name=$1, author=$2 WHERE id=$3`, [name, author, id]);
}

async function deleteBookById(id:number) {
    await connection.query(`DELETE FROM books WHERE id=$1`,[id]);
}

export const bookRepository = { createBook, getBooks, getBookDetails, updateBookById, deleteBookById }