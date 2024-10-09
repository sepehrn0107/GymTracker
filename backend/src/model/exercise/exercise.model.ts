import { Schema, model } from "mongoose";
import { IExercise } from "../../interface/exercise/exercise.interface";

const exerciseSchema = new Schema<IExercise>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: false,
  },
  name: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
    unique: false,
    required: true,
  },
  //TODO: Create a solution for selecting targetArea. current idea is to create model. same thing with activityType
  targetAreaId: {
    type: Schema.Types.ObjectId,
    ref: "TargetArea",
    unique: false,
    required: true,
  }, //Weights/bodyweight/cardio/sport ->Select(weights) -> upperback, lowerback, chest, arms, legs -> select arms -> biceps, triceps, grip etc -> select triceps. END

  activityType: {
    type: String,
    enum: ["bodyweight", "weight", "resistance", "cardio"],
    unique: false,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
export default model<IExercise>("Exercise", exerciseSchema);
