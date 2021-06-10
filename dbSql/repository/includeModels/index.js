import { 
    author, 
    book, 
    tag, 
    category, 
    quotes 
} from '../../models';

export const authorsInclude = {
  model: author,
  as: 'author',
  attributes: {
    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
  },
};

export const categoryInclude = {
  model: category,
  as: 'category',
  attributes: {
    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
  },
};
export const bookInclude = {
  model: book,
  as: 'books',
  attributes: {
    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
  },
};
export const quotesInclude = {
  model: quotes,
  as: 'quotes',
  attributes: {
    exclude: ['createdAt', 'updatedAt', 'deletedAt'],
  },
  through: {
    attributes: [],
  },
};
export const tagInclude = {
    model: tag,
    as: 'tags',
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    through: {
      attributes: [],
    },
  };