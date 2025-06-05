import Exercise from "../models/exerciseModel.js";

export const getExercisesByMuscleGroup = async (req, res) => {
  try {
    const muscleGroup = req.query.muscleGroup;
    const exercises = await Exercise.find({
      muscleGroup: new RegExp(`^${muscleGroup}$`, "i") // case-insensitive
    });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};