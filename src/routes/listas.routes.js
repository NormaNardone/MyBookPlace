import { Router } from "express";
import { authRequiered } from "../middlewares/validartoken.js";
import {
    getListas,
    createLista,
    getLista,
    updateLista,
    deleteLista,
} from "../controllers/listas.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createListaSchema } from "../schemas/listas.schema.js";

const router = Router();

router.get("/listas", authRequiered, getListas);

router.get("/listas/:id", authRequiered, getLista);

router.post("/listas", validateSchema(createListaSchema), authRequiered,createLista); 

router.delete("/listas/:id", authRequiered, deleteLista);

router.put("/listas/:id", authRequiered, updateLista);

export default router;