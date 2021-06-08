import { book, tag, author, quotes, books_tags } from '../models';

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
    include: [{
      model: author,
      as: 'authors',
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },{
      model: book,
      as: 'books',
      attributes: ['name'],
      through: {
        attributes: [],
      }
    },{
      model: quotes,
      as: 'quotes',
      attributes: ['text'],
      through: {
        attributes: [],
      }
    }],
  });
};
