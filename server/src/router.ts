import express from "express";
import clientActions from "./modules/client/clientActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* ************************************************************************* */
// Client routes
router.get("/api/clients", clientActions.browse);
router.get("/api/clients/:id", clientActions.read);
router.put("/api/clients/:id", clientActions.edit);
router.post("/api/clients", clientActions.add);
router.delete("/api/clients/:id", clientActions.remove);

// Define item-related routes
import booksActions from "./modules/books/booksActions";

router.get("/api/books", booksActions.browse);
router.get("/api/books/:id", booksActions.read);
router.post("/api/books", booksActions.add);
router.put("/api/books/:id", booksActions.edit);
router.delete("/api/books/:id", booksActions.remove);

/* ************************************************************************* */

export default router;
