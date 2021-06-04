import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import { findUser } from '../databaseMongo/repository/users.repository';

import dotenv from 'dotenv';

dotenv.config();

export const encryptPasswords = (req, res, next) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
  } catch (error) {
    res.json(error);
  }
};

export const userExists = async (req, res, next) => {
  const payload = await findUser(req.body.email);
  if (!payload) {
    res.json('User not found');
  } else {
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      payload.password
    );
    if (!passwordMatch) {
      res.json({ error: 'Invalid password' });
    } else {
      next();
    }
  }
};

export const verifyToken = (req, res, next) => {
  if (!req.headers['user-token']) {
    return res.json({ error: 'Theres not token' });
  }

  const userToken = req.headers['user-token'];
  let payload = {};

  try {
    payload = jwt.decode(userToken, process.env.JWT_ENCODE);
  } catch (error) {
    return res.json({ error: 'Not valid token' });
  }

  if (payload.expiredAt < moment().unix()) {
    return res.json({ error: 'Token has expired' });
  }

  next();
};
