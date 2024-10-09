//TODO Exercise
import { Request, Response } from "express";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import { createExercise } from "../../services/exercise.services";
import { ErrorCode } from "../../errors/custom.errors";
import { registerExerciseInput } from "../../validation/exercise.validation";
import {
  extractTokenfromHeader,
  getUserIdFromToken,
  stringToObjectId,
} from "../../utils/util";
import mongoose from "mongoose";
import { IUserMessage } from "../../middleware/authJWT.middleware";

export const registerExercise = asyncHandler(
  async (
    req: IUserMessage<Record<string, string>, object, registerExerciseInput>,
    res: Response
  ) => {
    const { name, description, targetAreaId, activityType } = req.body;
    const userId = stringToObjectId(req?.userData.userId);
    const targetAreaObjectId = new mongoose.Types.ObjectId(targetAreaId); // Convert to ObjectId
    if (!userId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }
    const createExerciseResult = await createExercise({
      name: name,
      description: description,
      targetAreaId: targetAreaObjectId,
      activityType: activityType,
      userId: userId,
    });
    if (!createExerciseResult.success) {
      console.log("error creating exercise");
    }
    res
      .status(201)
      .json({ success: true, message: "Exercise created successfully" });
  }
);
