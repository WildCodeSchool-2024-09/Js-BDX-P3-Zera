import type { RequestHandler } from "express";

// Import access to data
import illusRepository from "./illusRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const illus = await illusRepository.readAll();

    // Respond with the illu in JSON format
    res.json(illus);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const illuId = Number(req.params.id);
    const illu = await illusRepository.read(illuId);

    // If the illu is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the illu in JSON format
    if (illu == null) {
      res.sendStatus(404);
    } else {
      res.json(illu);
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
    const affectedRows = await booksRepository.update(updated)
  }
} */

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the book data from the request body
    const newillu = {
      url: req.body.illu,
      episodes_id: req.body.episode_id,
    };

    // Create the illu
    const insertId = await illusRepository.create(newillu);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
