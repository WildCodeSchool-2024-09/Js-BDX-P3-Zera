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

/* ************************************************************************* */

export default router;
