import { Schema, model } from "mongoose";
import { IExercise } from "../../interface/exercise/exercise.interface";

const exerciseSchema = new Schema<IExercise>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
    unique: true,
    index: true,
  },
  name: {
    required: true,
  },
  description: {
    maxlength: 1000,
    required: false,
  },
  //TODO: Create a solution for selecting bodypart. current idea is to create model. same thing with category
  bodypart: {
    type: Schema.Types.ObjectId,
    ref: "BodyPart",
    required: [false, "BodyPart not required yet"],
    unique: true,
    index: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "BodyPart",
    required: [false, "BodyPart not required yet"],
    unique: true,
    index: true,
  },
});
