import type { RequestHandler } from "express";

// Import access to data
import booksRepository from "./booksRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const books = await booksRepository.readAll();

    // Respond with the books in JSON format
    res.json(books);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const bookId = Number(req.params.id);
    const book = await booksRepository.read(bookId);

    // If the book is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the book in JSON format
    if (book == null) {
      res.sendStatus(404);
    } else {
      res.json(book);
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
    const newbook = {
      resume: req.body.resume,
      illu: req.body.illu,
      contains_id: req.body.contains_id,
    };

    // Create the book
    const insertId = await booksRepository.create(newbook);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
