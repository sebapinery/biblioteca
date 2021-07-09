import { createToken } from '../services/security.service';
import dotenv from 'dotenv';

dotenv.config();

import { createUser, getAllUsers } from '../dbSql/repository/user.repository';

export const getAllUsersController = async (_, res) => {
  try {
    const allUsers = await getAllUsers();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewUserController = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    const token = createToken(newUser);
    res.status(201).json({ msg: 'User created successfully', token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const loginUserController = async (req, res) => {
//   try {
//     const token = createToken(req.body);
//     res.status(202).json({ msg: 'Login successfully', token: token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
