import { category } from '../models';

export const getAllCategories = () => {
    return category.findAll();
}

export const createCategory = (newCategoryBody) => {
    return category.create(newCategoryBody);
}