import { author } from '../models';
import { Op } from 'sequelize';

import { bookInclude } from "../repository/includeModels";
import { timestampsOff } from "../repository/excludeTemplates";

export const getAllAuthors = () => {
  return author.findAll({
      where: {
          deletedAt: { 
            [Op.is]: null
          }
      },
    attributes: timestampsOff,
    include: bookInclude,
  });
};

export const getOneAuthorById = (authorId) => {
  return author.findOne({
    where: {
      id: authorId,
    },
    attributes: timestampsOff,
    include: bookInclude,
  });
};

export const getOneAuthorByName = (authorName) => {
  return author.findOne({
    where: {
      name: {
        [Op.like]: '%' + authorName + '%',
      }
    },
    attributes: timestampsOff,
    include: bookInclude,
  });
};

export const editOneAuthor = async (authorId, updateBody) => {
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