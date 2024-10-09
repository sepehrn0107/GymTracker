import mongoose from "mongoose";
import { object, string, TypeOf, date, z } from "zod";

const objectIdValidation = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val) || val === "", {
    message: "Invalid ObjectId",
  });

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
export type registerExerciseInput = TypeOf<
  typeof registerExerciseSchema
>["body"];
