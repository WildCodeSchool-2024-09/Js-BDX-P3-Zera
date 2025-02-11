import express from "express";
import clientActions from "./modules/client/clientActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Users routes
router.post("/api/login", clientActions.login);

/* ************************************************************************* */

router.get("/api/clients", clientActions.browse);
router.get("/api/clients/:id", clientActions.read);
router.put("/api/clients/:id", clientActions.edit);
router.post("/api/clients", clientActions.add);
router.delete("/api/clients/:id", clientActions.remove);

import booksActions from "./modules/books/booksActions";

router.get("/api/books", booksActions.browse);
router.get("/api/books/:id", booksActions.read);
router.post("/api/books", booksActions.add);
router.put("/api/books/:id", booksActions.edit);
router.delete("/api/books/:id", booksActions.remove);

import episodesActions from "./modules/episodes/episodesActions";

router.get("/api/episodes/", episodesActions.browse);
router.get("/api/episodes/:id", episodesActions.read);
router.post("/api/episodes", episodesActions.add);
router.put("/api/episodes/:id", episodesActions.edit);
router.delete("/api/episodes/:id", episodesActions.remove);
router.get("/api/episodes/:id/illustration", episodesActions.getIllustration);

import glossaryActions from "./modules/glossary/glossaryActions";

router.get("/api/glossary", glossaryActions.browse);
router.get("/api/glossary/:id", glossaryActions.read);
router.post("/api/glossary", glossaryActions.add);
router.put("/api/glossary/:id", glossaryActions.edit);
router.delete("/api/glossary/:id", glossaryActions.remove);

/* ************************************************************************* */

export default router;
