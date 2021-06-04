import Books from '../models/books.models';

export const getAllBooks = () =>
  Books.find({
    deletedAt: {
      $type: 'null',
    },
  });

export const getSingleBook = (id) => Books.findById(id);

export const createBook = (body) => Books.create(body);

export const updateOneBook = (id, body) => Books.updateOne({ _id: id }, body);
