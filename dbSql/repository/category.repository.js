import { category, book, author } from '../models';

import { bookInclude, authorsInclude } from './includeModels';

export const getAllCategories = () => {
  return category.findAll({
    include: {...bookInclude, include: authorsInclude},
  });
};

export const createCategory = (newCategoryBody) => {
  return category.create(newCategoryBody);
};
