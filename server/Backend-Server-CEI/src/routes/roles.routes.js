import { Router } from "express";

import { createNewRoles, getRoles, getRolesByID, deleteRoles, updateRoles } from "../controllers/roles.controller";

const router = Router();

router.get("/roles", getRoles);

router.post("/roles", createNewRoles);

//Este sera para obtener productos por ID
router.get("/roles/:id", getRolesByID);

router.delete("/roles/:id", deleteRoles);

router.put("/roles/:id", updateRoles);

export default router;
