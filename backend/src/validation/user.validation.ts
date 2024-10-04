import { object, string, array, TypeOf } from "zod";
export const createUserSchema = object({
  body: object({
    email: string({ required_error: "Email is required" }).email(
      "Invalid email format",
    ),
    name: string({ required_error: "Name is required" }),
    password: string({ required_error: "Password is required" }).min(
      6,
      "Password must be at least 6 characters",
    ),
    // role: string({ required_error: "Role is required" }),
  }),
});
export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
