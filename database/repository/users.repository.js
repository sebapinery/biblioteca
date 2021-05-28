import User from '../models/user.models';

export const getAllUsers = () => User.find();

export const createUser = (body) => User.create(body);

export const findUser = (userEmail) => User.findOne({ email: userEmail });
