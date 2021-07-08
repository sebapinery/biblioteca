import { Router } from 'express';

import {
  getAllBooksController,
  createNewBooksController,
  getSingleBookController,
  deleteBookByIdController,
  updateBookByIdController
} from '../controllers/books.controller';

// import { verifyToken } from '../middlewares/user.middleware';

const router = Router();

router.get('/', getAllBooksController);
router.get('/:id', getSingleBookController);
router.post('/', createNewBooksController);
router.patch('/:id', updateBookByIdController);
router.delete('/:id', deleteBookByIdController);

export default router;
