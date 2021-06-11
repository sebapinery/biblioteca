import { author, book, tag, category, quotes } from '../../models';

import { attributesOff, timestampsOff } from '../excludeTemplates';

export const authorsInclude = {
  model: author,
  as: 'author',
  attributes: timestampsOff,
};

export const categoryInclude = {
  model: category,
  as: 'category',
  attributes: timestampsOff,
};
export const bookInclude = {
  model: book,
  as: 'books',
  attributes: timestampsOff,
};
export const quotesInclude = {
  model: quotes,
  as: 'quotes',
  attributes: timestampsOff,
  through: attributesOff,
};
export const tagInclude = {
  model: tag,
  as: 'tags',
  attributes: timestampsOff,
  through: attributesOff,
};
