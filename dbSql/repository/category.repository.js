import { category, book, author } from '../models';

export const getAllCategories = () => {
    return category.findAll({ 
        include: [{
            model: book,
            attributes:['name'],
            include: [{ 
                model: author, 
                attributes: ['name']
            }]
        }]
    });
}

export const createCategory = (newCategoryBody) => {
    return category.create(newCategoryBody);
}