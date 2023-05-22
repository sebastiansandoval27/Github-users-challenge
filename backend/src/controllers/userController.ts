import { RequestHandler } from "express";

import User from "../database/models/UserModel";
import { createJsonResponse } from "../exceptions/errorException";

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users: User[] = await User.findAll();
    if (users.length === 0) {
      return res.status(200).json(createJsonResponse("Users not found", false, [], 200));
    }
    return res.status(200).json(createJsonResponse("Users found", false, users, 200));
  } catch (error: any) {
    return res.status(500).json(createJsonResponse("Internal server error", true, [], 500));
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user: User | null = await User.findByPk(id);
    if (!user) {
      return res.status(404).json(createJsonResponse("User not found", true, [], 404));
    }
    
    return res.status(200).json(createJsonResponse("User found", false, user, 200));
  } catch (error: any) {
    return res.status(500).json(createJsonResponse("Internal server error", true, [], 500));
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user: userObject } = req.body;
    const user: User = await User.create({ ...userObject });
    return res.status(201).json(createJsonResponse("User created", true, [], 201));
  } catch (error: any) {
    return res.status(500).json(createJsonResponse("Internal server error", true, [], 500));
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user: userObject } = req.body;
    const user: User | null = await User.findByPk(id);
    if (!user) {
      return res.status(404).json(createJsonResponse("User not found", true, [], 404));
    }
    await user.update({ ...userObject });
    return res.status(200).json(createJsonResponse("User updated", false, user, 200));
  } catch (error: any) {
    return res.status(500).json(createJsonResponse("Internal server error", true, [], 500));
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user: User | null = await User.findByPk(id);
    if (!user) {
      return res.status(404).json(createJsonResponse("User not found", true, [], 404));
    }
    await user.destroy();
    return res.status(200).json(createJsonResponse("User deleted", false, [], 200));
  } catch (error: any) {
    return res.status(500).json(createJsonResponse("Internal server error", true, [], 500));
  }
}