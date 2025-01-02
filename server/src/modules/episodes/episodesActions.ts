import type { RequestHandler } from "express";

// Import access to data
import episodesRepository from "./episodesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all episodes
    const episodes = await episodesRepository.readAll();

    // Respond with the episodes in JSON format
    res.json(episodes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific episode based on the provided ID
    const episodeId = Number(req.params.id);
    const episode = await episodesRepository.read(episodeId);

    // If the episode is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the episode in JSON format
    if (episode == null) {
      res.sendStatus(404);
    } else {
      res.json(episode);
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
    const affectedRows = await episodesRepository.update(updated)
  }
} */

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the episode data from the request body
    const newepisode = {
      resume: req.body.resume,
      illu: req.body.illu,
      contains_id: req.body.contains_id,
    };

    // Create the episode
    const insertId = await episodesRepository.create(newepisode);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted episode
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
