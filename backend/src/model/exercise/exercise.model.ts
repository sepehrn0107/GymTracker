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
  },
  activityType: {
    type: Schema.Types.ObjectId,
    ref: "BodyPart",
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
