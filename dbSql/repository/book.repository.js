import { book, author, category, tag } from '../models';

export const getAllBooks = () => {
  return book.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    include: [
      {
        model: author,
        attributes: ['name'],
      },
      {
        model: category,
        attributes: ['name'],
      },
      {
        model: tag,
        as: 'tags',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
        through: {
          attributes: [],
        },
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
      {
        model: category,
        attributes: ['name'],
      },
      {
        model: tag,
        as: 'tags',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt'],
        },
        through: {
          attributes: [],
        },
      },
    ],
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
