import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  muscleGroup: String,
  difficulty: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;