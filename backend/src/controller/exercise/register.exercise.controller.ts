//TODO Exercise
import { Request, Response } from "express";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import { createExercise } from "../../services/exercise.services";
import { ErrorCode } from "../../errors/custom.errors";
import { registerExerciseInput } from "../../validation/exercise.validation";
import { extractTokenfromHeader, getUserIdFromToken } from "../../utils/util";
import mongoose from "mongoose";

export const registerExercise = asyncHandler(
  async (
    req: Request<Record<string, string>, object, registerExerciseInput>,
    res: Response
  ) => {
    const { name, description, bodypart, category } = req.body;
    const userObjectId = new mongoose.Types.ObjectId(getUserIdFromToken(req)); // append userobjectid derived from token
    const bodypartObjectId = new mongoose.Types.ObjectId(bodypart); // Convert to ObjectId
    const categoryObjectId = new mongoose.Types.ObjectId(category); // Convert to ObjectId
    if (!userObjectId) {
      throw new BadRequestError("User now found", ErrorCode.BAD_REQUEST);
    }
    await createExercise({
      name: name,
      description: description,
      bodypart: bodypartObjectId,
      category: categoryObjectId,
      userId: userObjectId,
    });
    res
      .status(201)
      .json({ success: true, message: "Exercise created successfully" });
  }
);
