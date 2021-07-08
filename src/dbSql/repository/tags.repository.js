import { tag, books_tags } from '../models';

import {
  authorsInclude,
  bookInclude,
  quotesInclude,
} from '../repository/includeModels';

import { attributesOff, timestampsOff } from '../repository/excludeTemplates';

export const createNewTag = (tagName) => {
  return tag.create({ tagName });
};

export const makeRelation = (payload) => {
  // boookId
  // authorId
  // quoteId
  // tagId
  return books_tags.create(payload);
};

export const getAllTags = () => {
  return tag.findAll({
    attributes: timestampsOff,
    include: [
      { ...authorsInclude, as: 'authors', through: attributesOff },
      { ...bookInclude, through: attributesOff },
      { ...quotesInclude, through: attributesOff},
    ],
  });
};
