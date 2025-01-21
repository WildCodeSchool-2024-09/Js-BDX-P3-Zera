import type { RequestHandler } from "express";
import glossaryRepository from "./glossaryRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const glossary = await glossaryRepository.readAll();
    res.json(glossary);
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
};

// The R of BREAD - Read (Read One) operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const glossaryId = Number(req.params.id);
    const glossary = await glossaryRepository.read(glossaryId);
    if (glossary == null) {
      res.sendStatus(404);
    } else {
      res.json(glossary);
    }
  } catch (err) {
    next(err);
  }
};
// The E of BREAD - Edit (Update) operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const updatedGlossary = {
      id: Number(req.params.id), // ID from the URL
      title: req.body.title, // Updated data from the request body
      definition: req.body.definition,
    };
    const affectedRows = await glossaryRepository.update(updatedGlossary);
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
    const newGlossary = {
      title: req.body.title,
      definition: req.body.definition,
    };
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
      res.sendStatus(404); // user not found
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, remove };
