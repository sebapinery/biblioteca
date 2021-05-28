import Books from '../models/books.models';

export const getAllBooks = () => Books.find();

export const getSingleBook = (id) => Books.findById(id);

export const createBook = (body) => Books.create(body);
