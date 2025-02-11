import type { RequestHandler } from "express";

// Import access to data
import choicesRepository from "../choices/choicesRepository";
import episodesRepository from "./episodesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const episodes = await episodesRepository.readAll();
    res.json(episodes);
  } catch (err) {
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

const getIllustration: RequestHandler = async (req, res, next) => {
  try {
    const episodeId = Number(req.params.id);
    const illustration = await episodesRepository.getIllustration(episodeId);

    if (illustration == null) {
      res.sendStatus(404);
    } else {
      res.contentType("application/dataurl");
      res.send(illustration.url);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const episodeId = +req.params.id;
    const updatedEpisode = {
      id: episodeId,
      title: req.body.title,
      to_register: req.body.to_register,
      type: req.body.type,
      books_id: +req.body.books_id,
      is_free: req.body.is_free,
      paragraphs: req.body.paragraphs,
      illustration: req.body.illustration,
    };
    const affectedRows = await episodesRepository.update(updatedEpisode);
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
    // Extract the episode data from the request body
    const newepisode = {
      title: req.body.title,
      to_register: req.body.to_register,
      type: req.body.type,
      books_id: +req.body.books_id,
      is_free: req.body.is_free,
      paragraphs: req.body.paragraphs,
      illustration: req.body.illustration,
    };

    // Create the episode
    const insertId = await episodesRepository.create(newepisode);

    await Promise.all(
      req.body.choices.map(
        async (choiceData: {
          nextEpisodeId: string;
          text: string;
        }) => {
          const choice = {
            episodes_source_id: insertId,
            episodes_target_id: +choiceData.nextEpisodeId,
            text: choiceData.text,
          };

          return choicesRepository.create(choice);
        },
      ),
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted episode
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const remove: RequestHandler = async (req, res, next) => {
  try {
    const episodeId = Number(req.params.id);
    const affectedRows = await episodesRepository.delete(episodeId);
    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404); // Admin not found
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, getIllustration, add, edit, remove };
