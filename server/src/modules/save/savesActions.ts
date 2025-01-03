import type { RequestHandler } from "express";

// Import access to data
import savesRepository from "./savesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const saves = await savesRepository.readAll();

    // Respond with the saves in JSON format
    res.json(saves);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific save based on the provided ID
    const saveId = Number(req.params.id);
    const save = await savesRepository.read(saveId);

    // If the save is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the save in JSON format
    if (save == null) {
      res.sendStatus(404);
    } else {
      res.json(save);
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
    const newsave = {
      date: req.body.date,
      episodes_id: req.body.episodes_id,
      clients_id: req.body.contains_id,
    };

    // Create the book
    const insertId = await savesRepository.create(newsave);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
