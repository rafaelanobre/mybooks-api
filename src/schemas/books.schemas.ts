import { BookCreation } from "@/protocols/book.protocol";
import Joi from "joi";

export const bookSchema = Joi.object<BookCreation>({
    name: Joi.string().required(),
    author: Joi.string().required()
})