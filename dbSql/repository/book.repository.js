import { book, author, category, tag, books_tags } from '../models';

export const getAllBooks = () => {
  return book.findAll({
    attributes: {
      exclude: [
        'createdAt',
        'updatedAt',
        'deletedAt'
      ],
    },
    include: [
      {
        model: author,
        attributes: ['name'],
      },
      {
        model: category,
      },
      {
        model: tag,
        as: 'tags',
        attributes: {
          exclude: ['id','createdAt', 'updatedAt'],
        },
        through: {
          attributes: [],
        }
      }
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
  return book.create(newBookBody, {
    include: [
      {
        model: 'tag',
        as: 'tags',
        through: books_tags,
      },
    ],
  });
};
