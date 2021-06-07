import { book, tag, books_tags } from '../models';

export const createNewTag = (tagName) => {
  return tag.create({ tagName });
};

export const addBooktoATag = (payload) => {
  return books_tags.create(payload);
};

export const getAllTags = () => {
  return tag.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: {
      model: book,
      as: 'books',
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};
