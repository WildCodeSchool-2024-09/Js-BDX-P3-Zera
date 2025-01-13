import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import booksActions from "./modules/books/booksActions";

router.get("/api/books", booksActions.browse);
router.get("/api/books/:id", booksActions.read);
router.post("/api/books", booksActions.add);
router.put("/api/books/:id", booksActions.edit);
router.delete("/api/books/:id", booksActions.remove);

/* ************************************************************************* */

export default router;
