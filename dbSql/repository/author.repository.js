import { author, book } from '../models';
import Sequelize, { Op } from 'sequelize';

export const getAllAuthors = () => {
  return author.findAll({
      where: {
          deletedAt: { 
            [Op.is]: null
          }
      },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    include: {
      model: book,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'authorId', 'deletedAt'],
      },
    },
  });
};

export const getOneAuthorById = (authorId) => {
  return author.findOne({
    where: {
      id: authorId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    include: {
      model: book,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      },
    },
  });
};

export const getOneAuthorByName = (authorName) => {
  return author.findOne({
    where: {
      name: {
        [Op.like]: '%' + authorName + '%',
      }
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: {
      model: book,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'authorId', 'deletedAt'],
      },
    },
  });
};

export const editOneAuthor = async (authorId, updateBody) => {
  const authorExist = await author.findByPk(authorId);
  if (!authorExist) throw new Error('Author does not exist');

  await author.update(updateBody, {
    where: {
      id: authorId,
    },
  });
  return author.findByPk(authorId);
};

export const createNewAuthor = (newAuthorBody) => {
  return author.create(newAuthorBody);
};

export const softDeletedAuthor = async (authorId) => {
  const authorExist = await author.findByPk(authorId);
  if (!authorExist) throw new Error('Author does not exist');

  await author.update(
    { deletedAt: new Date() },
    {
      where: {
        id: authorId,
      },
    }
  );
  return author.findByPk(authorId);
};