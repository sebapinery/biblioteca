import { Router } from 'express';

import {
  getAllBooksController,
  createNewBooksController,
  getSingleBookController,
} from '../controllers/books.controller';

import { verifyToken } from '../middlewares/user.middleware';

const router = Router();

router.get('/', getAllBooksController);
router.get('/:id', getSingleBookController);
router.post('/', createNewBooksController);

export default router;
