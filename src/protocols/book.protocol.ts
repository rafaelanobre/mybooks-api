export type Book = {
    id: number;
    name: string;
    author: string;
    ownedAt: Date;
}

export type BookCreation = Omit<Book, "id" | "ownedAt">