import { Request, Response } from "express";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import { ErrorCode } from "../../errors/custom.errors";
import { editExerciseInput } from "../../validation/exercise.validation";
import { stringToObjectId } from "../../utils/util";
import mongoose from "mongoose";
import { IUserMessage } from "../../middleware/authJWT.middleware";
import {
  findExerciceById,
  updateExerciseById,
} from "../../services/exercise.services";

export const editExercise = asyncHandler(
  async (
    req: IUserMessage<Record<string, string>, object, editExerciseInput>,
    res: Response
  ) => {
    const { exerciseId, name, description, targetAreaId, activityType } =
      req.body;

    const userObjectId = stringToObjectId(req?.userData.userId);
    console.log("userObjectId: ", userObjectId);
    const exercise = findExerciceById(exerciseId);
    const exerciseOwner = (await exercise).userId;
    console.log("exerciseOwner: ", exerciseOwner);
    if (!userObjectId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }
    const updates = {
      ...(name && { name }),
      ...(description && { description }),
      ...(targetAreaId && {
        targetAreaId: new mongoose.Types.ObjectId(targetAreaId),
      }),
      ...(activityType && { activityType }),
    };
    await updateExerciseById(exerciseId, updates);
    res
      .status(201)
      .json({ success: true, message: "Exercise edited successfully" });
  }
);
