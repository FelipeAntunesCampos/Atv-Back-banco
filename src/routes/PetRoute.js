import { Router } from "express";
import * as PetController from './../controllers/PetController.js'

const router = Router();

//rota Get all
router.get("/", PetController.listarTodos);
router.get("/:id", PetController.listarUm);

export default router;