import type { RequestHandler } from "express";
import usersRepository from "./userRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await usersRepository.readAll();
    res.json(users);
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
};

// The R of BREAD - Read (Read One) operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const user = await usersRepository.read(userId);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};
// The E of BREAD - Edit (Update) operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const updateduser = {
      id: Number(req.params.id), // ID from the URL
      email: req.body.email, // Updated data from the request body
      password: req.body.password,
    };
    const affectedRows = await usersRepository.update(updateduser);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    const newuser = {
      email: req.body.email,
      password: req.body.password,
    };
    const insertId = await usersRepository.create(newuser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Delete operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const affectedRows = await usersRepository.delete(userId);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404); // user not found
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, remove };
