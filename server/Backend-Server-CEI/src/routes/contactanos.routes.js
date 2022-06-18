import { Router } from "express";

import { createNewContactanos, getContactanos } from "../controllers/contactanos.controller";

const router = Router();

router.get("/contactanos", getContactanos);

router.post("/contactanos", createNewContactanos);

//Este sera para obtener productos por ID
router.get("/contactanos");

router.delete("/contactanos");

router.put("/contactanos");

export default router;
