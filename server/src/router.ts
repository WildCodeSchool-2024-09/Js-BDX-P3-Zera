import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define adminAction-related routes

/* ************************************************************************* */

import adminAction from "./modules/admins/adminAction";

router.get("/api/admin", adminAction.browse);
router.get("/api/admin/:id", adminAction.read);
router.post("/api/admin", adminAction.add);
router.put("/api/admin/:id", adminAction.edit);
router.delete("/api/admin/:id", adminAction.remove);

/* ************************************************************************* */

export default router;
