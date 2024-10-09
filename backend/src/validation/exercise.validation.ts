import mongoose from "mongoose";
import { object, string, TypeOf, date, z } from "zod";

export const registerExerciseSchema = object({
  body: object({
    name: string({ required_error: "Exercise must have a name" })
      .min(6, "name must be more than 6 characters")
      .max(50, "name can be maximum 50 characters"),
    description: string({ required_error: "Exercise must have a name" })
      .min(6, "name must be more than 6 characters")
      .max(500, "name can be maximum 50 characters"),
    targetAreaId: string({ required_error: "Exercise must have target area" }),
    activityType: string(),
  }),
});

export const editExerciseSchema = object({
  body: object({
    exerciseId: string(),
    name: string({ required_error: "Exercise must have a name" })
      .min(6, "name must be more than 6 characters")
      .max(50, "name can be maximum 50 characters")
      .optional(),
    description: string({ required_error: "Exercise must have a name" })
      .min(6, "name must be more than 6 characters")
      .max(500, "name can be maximum 50 characters")
      .optional(),
    targetAreaId: string({
      required_error: "Exercise must have target area",
    }).optional(),
    activityType: string().optional(),
  }),
});

export type registerExerciseInput = TypeOf<
  typeof registerExerciseSchema
>["body"];
export type editExerciseInput = TypeOf<typeof editExerciseSchema>["body"];
