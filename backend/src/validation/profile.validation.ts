import { object, string, number, Schema } from "zod";
export const createProfileSchema = object({
  body: object({
    firstName: string().optional(),
    lastName: string().optional(),
    age: number().min(0, { message: "Age cannot be negative" }).optional(),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email format",
    ),
    weight: number().min(0, { message: "Age cannot be negative" }).optional(),
    height: number().min(0, { message: "Age cannot be negative" }).optional(),
    // TODO: what to do with sessions?
    userId: string({ required_error: "User ID is required" }),
  }),
});
