import { object, string, number, array, Schema } from "zod";
const rpeSchema = number({ required_error: "RPE is required" })
  .min(1, "RPE must be at least 1")
  .max(10, "RPE cannot exceed 10")
  .refine((value) => value % 0.5 === 0, {
    message: "RPE must be in 0.5 increments",
  });

// Set schema
const setSchema = object({
  reps: number({ required_error: "Reps are required" }).min(
    1,
    "Reps must be at least 1"
  ),
  weight: number().optional(),
  duration: number().optional(),
  restTime: number().optional(),
  rpe: rpeSchema,
});

// Exercise in Session schema
const exerciseInSessionSchema = object({
  exerciseId: string({ required_error: "Exercise ID is required" }),
  sets: array(setSchema).nonempty("At least one set is required"),
  notes: string().optional(),
});

export const createSessionSchema = object({
  body: object({
    userId: string({ required_error: "User ID is required" }),
    date: string().optional(), // Assuming date is in string format, e.g., ISO format
    exercises: array(exerciseInSessionSchema).nonempty(
      "At least one exercise is required"
    ),
    totalDuration: number().optional(),
    notes: string().optional(),
  }),
});
