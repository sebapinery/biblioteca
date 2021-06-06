import { Router } from 'express';

import { createNewTagController, addBooktoATagController,getAllTagsController } from '../controllers/tag.controller';

const router = Router();

router.get('/', getAllTagsController);
router.post('/addBook', addBooktoATagController);
router.post('/', createNewTagController);

export default router;
