import { Request, Response } from "express";

export async function newBook(req: Request, res: Response){

    res.status(201).send("Livro criado com sucesso!");
}

export async function allBooks(req: Request, res: Response){
    res.status(200).send("Todos os livros p vc!");
}

export async function bookDetails(req: Request, res: Response){
    const id = req.params;
    
    res.status(200).send("Book Details");
}

export async function updateBook(req: Request, res: Response){
    const id = req.params;

    res.status(200).send("Livro atualizado com sucesso!");
}

export async function deleteBook(req: Request, res: Response){
    const id = req.params;

    res.status(200).send("Livro deletado com sucesso!");
}