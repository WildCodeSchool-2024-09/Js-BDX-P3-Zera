import type { RequestHandler } from "express";

// Import access to data
import glossaryRepository from "./glossaryRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const glossary = await glossaryRepository.readAll();
    res.json(glossary);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const glossaryId = Number(req.params.id);
    const glossary = await glossaryRepository.read(glossaryId);

    // If the contain is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the contain in JSON format
    if (glossary == null) {
      res.sendStatus(404);
    } else {
      res.json(glossary);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const updateGlossary = {
      id: Number(req.params.id),
      title: req.body.title,
      definition: req.body.definition,
    };
    const affectedRows = await glossaryRepository.update(updateGlossary);
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
    const newGlossary = {
      title: req.body.title,
      definition: req.body.definition,
    };

    // Create the book
    const insertId = await glossaryRepository.create(newGlossary);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const remove: RequestHandler = async (req, res, next) => {
  try {
    const glossaryId = Number(req.params.id);
    const affectedRows = await glossaryRepository.delete(glossaryId);
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
