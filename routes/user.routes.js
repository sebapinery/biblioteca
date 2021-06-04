import { Router } from 'express';

import {
  getAllUsersController,
  createNewUserController,
  loginUserController,
} from '../controllers/user.controller';

import { encryptPasswords, userExists } from '../middlewares/user.middleware';

const router = Router();

router.get('/', getAllUsersController);
router.post('/register',encryptPasswords, createNewUserController);
router.post('/login', userExists, loginUserController);

export default router;
