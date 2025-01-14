import type { RequestHandler } from "express";
import adminsRepository from "./adminRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const admins = await adminsRepository.readAll();
    res.json(admins);
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
};

// The R of BREAD - Read (Read One) operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const adminId = Number(req.params.id);
    const admin = await adminsRepository.read(adminId);
    if (admin == null) {
      res.sendStatus(404);
    } else {
      res.json(admin);
    }
  } catch (err) {
    next(err);
  }
};
// The E of BREAD - Edit (Update) operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const updatedAdmin = {
      id: Number(req.params.id), // ID from the URL
      email: req.body.email, // Updated data from the request body
      password: req.body.password,
    };
    const affectedRows = await adminsRepository.update(updatedAdmin);
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
    const newAdmin = {
      email: req.body.email,
      password: req.body.password,
    };
    const insertId = await adminsRepository.create(newAdmin);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Delete operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const adminId = Number(req.params.id);
    const affectedRows = await adminsRepository.delete(adminId);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404); // Admin not found
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, remove };
