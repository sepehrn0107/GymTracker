import mongoose, { Document, Schema } from "mongoose";

interface ISet {
  reps: number;
  weight?: number; // Optional, as not all exercises have weights
  duration?: number; // Optional, for time-based exercises
  restTime?: number; // Optional, rest between sets
  rpe?: number;
}
interface IExerciseInSession {
  exerciseId: mongoose.Types.ObjectId; // Reference to the exercise
  sets: ISet[]; // Array of sets for the exercise
  notes?: string; // Optional notes for the exercise
}
interface ISession {
  userId: mongoose.Types.ObjectId; // Reference to the user
  date?: Date; // Date the session took place
  exercises: IExerciseInSession[]; // Array of exercises within the session
  totalDuration?: number; // Optional, total time spent in the session
  notes?: string; // Optional, general notes for the session
}

export { ISession, IExerciseInSession, ISet };
