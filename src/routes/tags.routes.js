import { Router } from 'express';

import { 
    createNewTagController, 
    makeRelationController,
    getAllTagsController, 
    getTagByIdController 
} from '../controllers/tag.controller';

const router = Router();

router.get('/:tagId', getTagByIdController)
router.get('/', getAllTagsController);
router.post('/makeRelation', makeRelationController);
router.post('/', createNewTagController);

export default router;