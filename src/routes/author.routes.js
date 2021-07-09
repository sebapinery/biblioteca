import { Router } from 'express';
import {
  createAuthorController,
  editOneAuthorController,
  getAllAuthorsController,
  getOneAuthorByIdController,
  deleteAuthorController,
  searchAuthorByNameController
} from '../controllers/author.controller';

const router = Router();

router.get('/:id', getOneAuthorByIdController);
router.get('/', getAllAuthorsController);

router.post('/search', searchAuthorByNameController);
router.post('/', createAuthorController);
router.patch('/:id', editOneAuthorController);
router.delete('/:id', deleteAuthorController);

export default router;
