import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Validate the incoming request (body, query, params)
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next(); // Proceed to the next middleware if validation succeeds
    } catch (e: any) {
      // Gather validation error messages
      console.error("Validation error:", e.errors);
      const message = e.errors.map((err: any) => err.message).join(", ");
      // Return a response with validation errors
      res.status(400).json({ message, success: false });
    }
  };

export default validateSchema;
