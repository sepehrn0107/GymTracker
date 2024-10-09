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
  targetAreaId: {
    type: Schema.Types.ObjectId,
    ref: "TargetArea",
    unique: false,
    required: true,
  },

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
