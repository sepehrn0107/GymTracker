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
    console.log("hello");
    const { name, description, targetAreaId, activityType } = req.body;
    const userObjectId = new mongoose.Types.ObjectId(getUserIdFromToken(req)); // append userobjectid derived from token
    const targetAreaObjectId = new mongoose.Types.ObjectId(targetAreaId); // Convert to ObjectId
    if (!userObjectId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }
    const createExerciseResult = await createExercise({
      name: name,
      description: description,
      targetAreaId: targetAreaObjectId,
      activityType: activityType,
      userId: userObjectId,
    });
    if (!createExerciseResult.success) {
      console.log("error creating exercise");
    }
    res
      .status(201)
      .json({ success: true, message: "Exercise created successfully" });
  }
);
