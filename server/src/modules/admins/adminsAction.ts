import type { RequestHandler } from "express";

// Import access to data
import adminsRepository from "./adminsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all admins
    const admins = await adminsRepository.readAll();

    // Respond with the admins in JSON format
    res.json(admins);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const adminId = Number(req.params.id);
    const admin = await adminsRepository.read(adminId);

    // If the admins is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the admins in JSON format
    if (admin == null) {
      res.sendStatus(404);
    } else {
      res.json(admin);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

/* const edit : RequestHandler = async (req, res, next) => {
  try {
    const updated = {
      id: +req.params.id,
      resume: req.body.resume,
      illu: req.body.illu,
      contains_id: req.body.contains_id,
    };
    const affectedRows = await adminsRepository.update(updated)
  }
} */

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the book data from the request body
    const newadmins = {
      register_id: req.body.contains_id,
    };

    // Create the book
    const insertId = await adminsRepository.create(newadmins);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
