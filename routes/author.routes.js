import { Router } from 'express';
import {
  createAuthorController,
  editOneAuthorController,
  getAllAuthorsController,
  getOneAuthorByIdController,
  deleteAuthorController,
  searchAuthorController
} from '../controllers/author.controller';

const router = Router();

router.get('/search', searchAuthorController);
router.get('/:id', getOneAuthorByIdController);
router.get('/', getAllAuthorsController);

router.patch('/:id', editOneAuthorController);
router.post('/', createAuthorController);
router.delete('/:id', deleteAuthorController);

export default router;
