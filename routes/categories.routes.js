import { Router } from 'express';
import { createCategoryController, getAllCategoriesController } from '../controllers/category.controller';

const router = Router();

router.get('/', getAllCategoriesController)
router.post('/', createCategoryController)

export default router;