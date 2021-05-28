import { Router } from 'express';
import {
  createAuthorController,
  editOneAuthorController,
  getAllAuthorsController,
  getOneAuthorByIdController,
  deleteAuthorController,
} from '../controllers/author.controller';

const router = Router();

router.get('/', getAllAuthorsController);
router.get('/:id', getOneAuthorByIdController);
router.patch('/:id', editOneAuthorController);
router.post('/', createAuthorController);
router.delete('/:id', deleteAuthorController);

export default router;
