import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import { findUserByEmail } from '../dbSql/repository/user.repository';

import dotenv from 'dotenv';

dotenv.config();

export const encryptPasswords = (req, res, next) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUserByEmail = async (req, res, next) => {
  const userExist = await findUserByEmail(req.body.email);
  if (!userExist) res.json('User not found'); 
  else {
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid password' });
    } else {
      next();
    }
  }
};

export const verifyToken = (req, res, next) => {
  const userToken = req.headers['user-token'];
  if (!userToken) res.json({ error: 'Theres not token' })

  let payload = {};

  try {
    payload = jwt.decode(userToken, process.env.JWT_ENCODE);
  } catch (error) {
    return res.status(401).json({ error: 'Not valid token' });
  }

  if (payload.expiredAt < moment().unix()) {
    return res.status(401).json({ error: 'Token has expired' });
  }

  next();
};
