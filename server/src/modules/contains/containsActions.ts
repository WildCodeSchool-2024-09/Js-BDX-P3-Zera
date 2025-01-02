import type { RequestHandler } from "express";

// Import access to data
import containsRepository from "./containsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const contains = await containsRepository.readAll();

    // Respond with the contains in JSON format
    res.json(contains);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const containId = Number(req.params.id);
    const contain = await containsRepository.read(containId);

    // If the contain is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the contain in JSON format
    if (contain == null) {
      res.sendStatus(404);
    } else {
      res.json(contain);
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
    const affectedRows = await containsRepository.update(updated)
  }
} */

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the book data from the request body
    const newcontains = {
      name: req.body.name,
    };

    // Create the book
    const insertId = await containsRepository.create(newcontains);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
