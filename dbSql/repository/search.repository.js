import { Op } from 'sequelize';
import models from '../models';

const allModels = models;

export const search = (queryParam, searchTerm) => {
  // Modelos de Include
  const authorsInclude = {
    model: allModels.author,
    as: 'author',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
  };

  const categoryInclude = {
    model: allModels.category,
    as: 'category',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
  };
  const tagInclude = {
    model: allModels.tag,
    as: 'tags',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    through: {
      attributes: [],
    },
  };
  const bookInclude = {
    model: allModels.book,
    as: 'books',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
  };
  const quotesInclude = {
    model: models.quotes,
    as: 'quotes',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    through: {
      attributes: [],
    },
  };

  // Selector de modelos que vamos a poner en el include de cada termino
  // Si se busca en Books, se va a incluir las asociaciones con authors, category y tags
  // Si se busca en Authors, se va a incluir las asociaciones con books y tags.
  // Si se busca en Categories, se va a incluir las asociaciones con Books

  const includeSelector = {
    book: [authorsInclude, categoryInclude, tagInclude],
    author: [bookInclude, tagInclude],
    category: [bookInclude],
  };

  if (queryParam === 'tag') {
    return allModels[queryParam].findAll({
      where: {
        [Op.or]: [{ tagName: { [Op.like]: '%' + searchTerm + '%' } }],
      },
      attributes: ['id', 'tagName'],
      include: [
        {
          ...bookInclude,
          include: {
            ...authorsInclude,
            as: 'author',
          },
          through: { attributes: [] },
        },
        { ...authorsInclude, as: 'authors', through: { attributes: [] } },
        { ...quotesInclude, through: { attributes: [] } },
      ],
    });
  } else {
    return allModels[queryParam].findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      },
      where: {
        [Op.or]: [{ name: { [Op.like]: '%' + searchTerm + '%' } }],
      },
      include: includeSelector[queryParam],
    });
  }
};
