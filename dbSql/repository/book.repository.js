import { book, author } from '../models';

export const getAllBooks = () => {
  return book.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt', 'authorId'],
    },
    include: [
      {
        model: author,
        attributes: ['name'],
      },
    ],
  });
};

export const getSingleBookById = (bookId) => {
  return book.findOne({
    where: {
      id: bookId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt', 'authorId'],
    },
    include: [
      {
        model: author,
        attributes: ['name'],
      },
    ],
  });
};

export const createBook = (newBookBody) => {
    return book.create(newBookBody);
}