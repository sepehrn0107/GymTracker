import { Schema, model } from "mongoose";
import {
  ISession,
  IExerciseInSession,
  ISet,
} from "../../interface/session/session.interface";

import { object, string, number, array } from "zod";

// Helper schema for RPE validation (1 to 10 with 0.5 increments

const setSchema = new Schema<ISet>({
  reps: {
    type: Number,
    required: true,
  },
  weight: { type: Number }, // Optional, depending on the exercise
  duration: { type: Number }, // Optional, for timed exercises
  restTime: { type: Number }, // Optional, rest between sets
  rpe: { type: Number },
});
const exerciseInSessionSchema = new Schema<IExerciseInSession>({
  exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise", required: true },
  sets: [setSchema], // Array of sets for this exercise
  notes: { type: String }, // Optional notes for the exercise
});
const sessionSchema = new Schema<ISession>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [exerciseInSessionSchema], // Array of exercises in the session
  totalDuration: { type: Number }, // Total time spent in the session (optional)
  notes: { type: String }, // General notes for the session (optional)
});
// Ensure indexes for efficient querying
sessionSchema.index({ userId: 1, "exercises.exerciseId": 1, date: -1 });

export default model<ISession>("Session", sessionSchema);
