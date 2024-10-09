import { Request, Response } from "express";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import { createTargetArea } from "../../services/targetArea.services";
import { ErrorCode } from "../../errors/custom.errors";
import { registeredTargetArea } from "../../validation/targetArea.valdation";
import { stringToObjectId } from "../../utils/util";
import mongoose from "mongoose";
import { IUserMessage } from "../../middleware/authJWT.middleware";

export const registerTargetArea = asyncHandler(
  async (
    req: IUserMessage<Record<string, string>, object, registeredTargetArea>,
    res: Response
  ) => {
    const { name, description, parent, children } = req.body;
    const userObjetId = stringToObjectId(req?.userData.userId);
    const parentObjectId = parent ? new mongoose.Types.ObjectId(parent) : null;
    if (!userObjetId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }
    await createTargetArea({
      name: name,
      description: description,
      creator: userObjetId,
      parent: parentObjectId,
      children: null,
    });
    res
      .status(201)
      .json({ success: true, message: "TargetArea created successfully" });
  }
);
