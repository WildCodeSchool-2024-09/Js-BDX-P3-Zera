import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define paragraphAction-related routes

/* ************************************************************************* */

import adminAction from "./modules/admins/adminAction";

router.get("/api/admin", adminAction.browse);
router.get("/api/admin/:id", adminAction.read);
router.post("/api/admin", adminAction.add);
router.put("/api/admin/:id", adminAction.edit);
router.delete("/api/admin/:id", adminAction.remove);

/* ************************************************************************* */

import episodesActions from "./modules/episodes/episodesActions";

router.get("/api/books/:books_id/episodes/", episodesActions.browse);
router.get("/api/books/:books_id/episodes/:id", episodesActions.read);
router.post("/api/books/:books_id/episodes", episodesActions.add);
router.put("/api/books/:books_id/episodes/:id", episodesActions.edit);
router.delete("/api/books/:books_id/episodes/:id", episodesActions.remove);

export default router;
