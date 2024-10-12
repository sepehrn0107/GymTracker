import { object, string, number, array, Schema } from "zod";

// Set schema
const setSchema = object({
  reps: number({ required_error: "Reps are required" }).min(
    1,
    "Reps must be at least 1"
  ),
  weight: number({ required_error: "weight" }).optional(),
  duration: number({ required_error: "duration" }).optional(),
  restTime: number({ required_error: "rest" }).optional(),
  rpe: number({ required_error: "Rrpe" }).min(1).max(10).optional(),
});

// Exercise in Session schema
const exerciseInSessionSchema = object({
  exerciseId: string({ required_error: "Exercise ID is required" }),
  sets: array(setSchema, { required_error: "At least one set is required" }),
  notes: string().optional(),
});

// Validation for the session
export const createSessionSchema = object({
  body: object({
    exercises: array(exerciseInSessionSchema, {
      required_error: "Exercises are required",
    }).nonempty("At least one exercise is required"), // Ensure at least one exercise
    totalDuration: number().optional(), // Optional total duration field
    notes: string().optional(), // Optional general notes field
  }),
});
