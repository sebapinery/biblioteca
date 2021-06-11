import { Op } from 'sequelize';
import models from '../models';

import {
  authorsInclude,
  bookInclude,
  categoryInclude,
  quotesInclude,
  tagInclude,
} from './includeModels';

import { 
  timestampsOff, 
  attributesOff 
} from '../repository/excludeTemplates';

const allModels = models;

export const search = (queryParam, searchTerm) => {
  // Selector de modelos que vamos a poner en el include de cada termino
  // Si se busca en Books, se va a incluir las asociaciones con authors, category y tags
  // Si se busca en Authors, se va a incluir las asociaciones con books y tags.
  // Si se busca en Categories, se va a incluir las asociaciones con Books
  const includeSelector = {
    book: [authorsInclude, categoryInclude, tagInclude],
    author: [bookInclude, tagInclude],
    category: [bookInclude],
    tag: [
      {
        ...bookInclude,
        include: authorsInclude,
        through: attributesOff,
      },
      { ...authorsInclude, as: 'authors', through: attributesOff },
      { ...quotesInclude, through: attributesOff },
    ],
  };

  // Busqueda si es por TAG,
  if (queryParam === 'tag') {
    return allModels[queryParam].findAll({
      where: {
        [Op.or]: [{ tagName: { [Op.like]: '%' + searchTerm + '%' } }],
      },
      attributes: ['id', 'tagName'],
      include: includeSelector[queryParam],
    });
  } else {
    //Busqueda por book, author o category
    return allModels[queryParam].findAll({
      attributes: timestampsOff,
      where: {
        [Op.or]: [{ name: { [Op.like]: '%' + searchTerm + '%' } }],
      },
      include: includeSelector[queryParam],
    });
  }
};
