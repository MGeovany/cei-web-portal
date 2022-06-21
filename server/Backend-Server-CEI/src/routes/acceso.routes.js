import { Router } from "express";

import { createNewAcceso, getAcceso, getAccesoByID, updateAcceso } from "../controllers/acceso.controller";

const router = Router();

router.get("/acceso", getAcceso);

router.post("/acceso", createNewAcceso);

//Este sera para obtener productos por ID
router.get("/acceso/:id", getAccesoByID);

router.put("/acceso/:id", updateAcceso);

export default router;