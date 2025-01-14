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

import booksActions from "./modules/books/booksActions";

router.get("/api/books", booksActions.browse);
router.get("/api/books/:id", booksActions.read);
router.post("/api/books", booksActions.add);
router.put("/api/books/:id", booksActions.edit);
router.delete("/api/books/:id", booksActions.remove);


/* ************************************************************************* */
import userAction from "./modules/users/userAction";

router.get("/api/user", userAction.browse);
router.get("/api/user/:id", userAction.read);
router.post("/api/user", userAction.add);
router.put("/api/user/:id", userAction.edit);
router.delete("/api/user/:id", userAction.remove);

export default router;
