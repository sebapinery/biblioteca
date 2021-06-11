import {
  getAllCategories,
  createCategory,
} from '../dbSql/repository/category.repository';

export const getAllCategoriesController = async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    res.json(allCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategoryController = async (req, res) => {
  try {
    const newCategoryCreated = await createCategory(req.body);
    res.json(newCategoryCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
