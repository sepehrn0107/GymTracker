import { Schema, model } from "mongoose";
import { IExercise } from "../../interface/exercise/exercise.interface";
import { uuidGenerator } from "../../utils/uuidgenerator";

const exerciseSchema = new Schema<IExercise>({
  exerciseId: {
    type: String,
    default: uuidGenerator,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: false,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 500,
    required: false,
  },
  //TODO: Create a solution for selecting bodypart. current idea is to create model. same thing with activityType
  bodypart: {
    type: Schema.Types.ObjectId,
    ref: "BodyPart",
  }, //Weights/bodyweight/cardio/sport ->Select(weights) -> upperback, lowerback, chest, arms, legs -> select arms -> biceps, triceps, grip etc -> select triceps. END

  activityType: {
    type: String,
    enum: ["bodyweight", "weight", "resistance", "cardio"],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});
export default model<IExercise>("Exercise", exerciseSchema);
