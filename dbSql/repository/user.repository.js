import { User } from '../models';

export const createUser = (body) => {
  return User.create(body);
};

export const getAllUsers = () => {
  return User.findAll();
};

export const findUserByEmail = (email) => {
  return User.findOne({
    where: {
      email: email,
    },
  });
};
