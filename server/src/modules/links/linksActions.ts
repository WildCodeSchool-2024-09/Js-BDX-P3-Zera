import type { RequestHandler } from "express";

// Import access to data
import linksRepository from "./linksRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all books
    const links = await linksRepository.readAll();

    // Respond with the books in JSON format
    res.json(links);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific book based on the provided ID
    const linkId = Number(req.params.id);
    const link = await linksRepository.read(linkId);

    // If the link is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the link in JSON format
    if (link == null) {
      res.sendStatus(404);
    } else {
      res.json(link);
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
    const newlink = {
      text: req.body.text,
      path: req.body.path,
    };

    // Create the book
    const insertId = await linksRepository.create(newlink);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted book
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
