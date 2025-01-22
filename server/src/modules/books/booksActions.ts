import type { RequestHandler } from "express";

// Import access to data
import booksRepository from "./booksRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const books = await booksRepository.readAll();
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
    const booksId = Number(req.params.id);
    const books = await booksRepository.read(booksId);

    // If the contain is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the contain in JSON format
    if (books == null) {
      res.sendStatus(404);
    } else {
      res.json(books);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updateBooks = {
      id: Number(req.params.id),
      title: req.body.title,
      resume: req.body.resume,
      illustration: req.body.illustration,
    };
    const affectedRows = await booksRepository.update(updateBooks);
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
    // Extract the book data from the request body
    const newBooks = {
      title: req.body.title,
      resume: req.body.resume,
      illustration: req.body.illustration,
    };

    // Create the book
    const insertId = await booksRepository.create(newBooks);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const remove: RequestHandler = async (req, res, next) => {
  try {
    const booksId = Number(req.params.id);
    const affectedRows = await booksRepository.delete(booksId);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, remove };
