import express from "express";
import { Router } from "express";

import { getPets, getPetById } from "../controllers/pets.controllers";
import {
  validateNumericId,
  validatePassword,
} from "../middleware/pets.middleware";
const petRouter: Router = express.Router();

petRouter.get("/", getPets);

petRouter.get("/:id", validatePassword, validateNumericId, getPetById);

export { petRouter };
