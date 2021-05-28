import { Router } from 'express';

import {
    getAllBooksController,
    createNewBooksController,
    getSingleBookController,
} from '../controllers/books.controller';

import { verifyToken } from '../middlewares/userMiddlewares';

const router = Router();

router.get('/', verifyToken, getAllBooksController);
router.get('/:id', getSingleBookController);
router.post('/', createNewBooksController);

export default router;
