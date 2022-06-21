import { Router } from "express";

import { createNewUsuarios, getUsuarios, getUsuariosByID, deleteUsuarios, updateUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);

router.post("/usuarios", createNewUsuarios);

//Este sera para obtener productos por ID
router.get("/usuarios/:id", getUsuariosByID);

router.delete("/usuarios/:id", deleteUsuarios);

router.put("/usuarios/:id", updateUsuarios);

export default router;