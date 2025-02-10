import type { RequestHandler } from "express";

// Import access to data
import paragraphsRepository from "./paragraphsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all paragraphs
    const paragraphs = await paragraphsRepository.readAll();

    // Respond with the paragraphs in JSON format
    res.json(paragraphs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific paragraph based on the provided ID
    const paragraphId = Number(req.params.id);
    const paragraph = await paragraphsRepository.read(paragraphId);

    // If the paragraph is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the paragraph in JSON format
    if (paragraph == null) {
      res.sendStatus(404);
    } else {
      res.json(paragraph);
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
    const newparagraph = {
      content: req.body.content,
      episodes_id: req.body.episodes_id,
    };

    // Create the book
    const insertId = await paragraphsRepository.create(newparagraph);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
