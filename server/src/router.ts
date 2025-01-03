import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import booksActions from "./modules/books/booksActions";

router.get("/api/books", booksActions.browse);
router.get("/api/books/:id", booksActions.read);
router.put("/api/books/:id", booksActions.edit);
router.post("/api/books", booksActions.add);
router.delete("/api/books/:id", booksActions.delete);

/* ************************************************************************* */

import adminsActions from "./modules/admins/adminsAction";

router.get("/api/admins", adminsActions.browse);
router.get("/api/admins/:id", adminsActions.read);
router.put("/api/admins/:id", adminsActions.edit);
router.post("/api/admins", adminsActions.add);
router.delete("/api/admins/:id", adminsActions.delete);

/* ************************************************************************* */

import clientsAction from "./modules/clients/clientsAction";

router.get("/api/clients", clientsAction.browse);
router.get("/api/clients/:id", clientsAction.read);
router.put("/api/clients/:id", clientsAction.edit);
router.post("/api/clients", clientsAction.add);
router.delete("/api/clients/:id", clientsAction.delete);

/* ************************************************************************* */

import containsActions from "./modules/contains/containsActions";

router.get("/api/contains", containsActions.browse);
router.get("/api/contains/:id", containsActions.read);
router.put("/api/contains/:id", containsActions.edit);
router.post("/api/contains", containsActions.add);
router.delete("/api/contains/:id", containsActions.delete);

/* ************************************************************************* */

import linksActions from "./modules/links/linksActions";

router.get("/api/links", linksActions.browse);
router.get("/api/links/:id", linksActions.read);
router.put("/api/links/:id", linksActions.edit);
router.post("/api/links", linksActions.add);
router.delete("/api/links/:id", linksActions.delete);

/* ************************************************************************* */

import episodesActions from "./modules/episodes/episodesActions";

router.get("/api/episodes", episodesActions.browse);
router.get("/api/episodes/:id", episodesActions.read);
router.put("/api/episodes/:id", episodesActions.edit);
router.post("/api/episodes", episodesActions.add);
router.delete("/api/episodes/:id", episodesActions.delete);

/* ************************************************************************* */

import illusActions from "./modules/illu/illusActions";

router.get("/api/illus", illusActions.browse);
router.get("/api/illus/:id", illusActions.read);
router.put("/api/illus/:id", illusActions.edit);
router.post("/api/illus", illusActions.add);
router.delete("/api/illus/:id", illusActions.delete);

/* ************************************************************************* */

import paragraphsActions from "./modules/paragraphs/paragraphsActions";

router.get("/api/paragraphs", paragraphsActions.browse);
router.get("/api/paragraphs/:id", paragraphsActions.read);
router.put("/api/paragraphs/:id", paragraphsActions.edit);
router.post("/api/paragraphs", paragraphsActions.add);
router.delete("/api/paragraphs/:id", paragraphsActions.delete);

/* ************************************************************************* */

import savesActions from "./modules/save/savesActions";

router.get("/api/saves", savesActions.browse);
router.get("/api/saves/:id", savesActions.read);
router.put("/api/saves/:id", savesActions.edit);
router.post("/api/saves", savesActions.add);
router.delete("/api/saves/:id", savesActions.delete);

export default router;
