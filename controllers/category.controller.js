import { getAllCategories, createCategory} from '../dbSql/repository/category.repository';

export const getAllCategoriesController = async (req, res) => {
    const allCategories = await getAllCategories();
    res.json(allCategories);
}

export const createCategoryController = async (req, res) => {
    const newCategoryCreated = await createCategory(req.body);
    res.json(newCategoryCreated);
}

