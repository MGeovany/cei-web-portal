import { Router } from "express";

import { createNewContactanos, getContactanos, getContactanosByID, deleteContactanos, updateContactanos } from "../controllers/contactanos.controller";

const router = Router();

router.get("/contactanos", getContactanos);

router.post("/contactanos", createNewContactanos);

//Este sera para obtener productos por ID
router.get("/contactanos/:id", getContactanosByID);

router.delete("/contactanos/:id", deleteContactanos);

router.put("/contactanos/:id", updateContactanos);

export default router;
