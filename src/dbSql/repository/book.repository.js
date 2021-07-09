import { book, author, category, tag } from '../models';

import { authorsInclude, categoryInclude, tagInclude } from './includeModels';

import { timestampsOff } from '../repository/excludeTemplates';

export const getAllBooks = () => {
  return book.findAll({
    attributes: timestampsOff,
    include: [authorsInclude, categoryInclude, tagInclude],
  });
};

export const getSingleBookById = (bookId) => {
  return book.findOne({
    where: {
      id: bookId,
    },
    attributes: timestampsOff,
    include: [authorsInclude, categoryInclude, tagInclude],
  });
};

export const createBook = async (newBookBody) => {
  const newBookCreated = await book.create(newBookBody, {
    include: [
      {
        model: author,
        as: 'author',
      },
      {
        model: category,
        as: 'category',
      },
    ],
  });

  const { tags } = newBookBody;
  if (!tags) return getSingleBookById(newBookCreated.id);

  if (Array.isArray(tags)) {
    tags.forEach(async (t) => {
      let tagFound = await tag.findByPk(t);
      await newBookCreated.addTags(tagFound);
    });
  }

  return getSingleBookById(newBookCreated.id);
};

export const softDeletedBook = async (bookId) => {
  await book.update(
    { deletedAt: new Date() },
    {
      where: {
        id: bookId,
      },
    }
  );
  return book.findByPk(bookId);
};

export const editOneBook = async (bookId, updateBody) => {
  await book.update(updateBody, {
    where: {
      id: bookId,
    },
  });
  return book.findByPk(bookId);
};
