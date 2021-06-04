import { User } from '../models';

export const createUser = (body) => {
    return User.create(body);
}

export const getAllUsers = () => {
    return User.findAll();
}