import express from "express";
import { getExercisesByMuscleGroup } from "../controllers/exerciseController.js";

const router = express.Router();

router.get("/", getExercisesByMuscleGroup);

export default router;