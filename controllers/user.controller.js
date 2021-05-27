import jwt from "jwt-simple";
import moment from "moment";
import dotenv from "dotenv";

dotenv.config();

import {
  createUser,
  getAllUsers,
} from "../database/repository/users.repository";

export const getAllUsersController = async (req, res) => {
  const payload = await getAllUsers();
  res.json(payload);
};

export const createNewUserController = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    const token = createToken(newUser);
    res.json({ msg: "User created successfully", token: token });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUserController = async (req, res) => {
  try {
    const token = createToken(req.body);
    res.json({ msg: "Login successfully", token: token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createToken = (user) => {
  const payload = {
    email: user.email,
    createdAt: moment().unix(),
    expiredAt: moment().add(60, "minutes").unix(),
  };
  return jwt.encode(payload, process.env.JWT_ENCODE);
};
