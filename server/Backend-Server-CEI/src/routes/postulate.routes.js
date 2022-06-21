import { Router } from "express";

import { createNewPostulate, getPostulate } from "../controllers/postulate.controller";

const router = Router();

router.get("/postulate", getPostulate);

router.post("/postulate", createNewPostulate);

//Este sera para obtener productos por ID
router.get("/contactanos/");

router.delete("/contactanos");

router.put("/contactanos");

export default router;
