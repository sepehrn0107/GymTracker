import { Request, Response } from "express";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import {
  createTargetArea,
  findTargetAreaById,
} from "../../services/targetArea.services";
import { ErrorCode } from "../../errors/custom.errors";
import { registeredTargetArea } from "../../validation/targetArea.valdation";
import { extractTokenfromHeader, getUserIdFromToken } from "../../utils/util";
import mongoose from "mongoose";

export const registerTargetArea = asyncHandler(
  async (
    req: Request<Record<string, string>, object, registeredTargetArea>,
    res: Response
  ) => {
    const { name, description, parent, children } = req.body;
    const userObjectId = new mongoose.Types.ObjectId(getUserIdFromToken(req));
    const parentObjectId = parent ? new mongoose.Types.ObjectId(parent) : null;
    if (!userObjectId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }
    await createTargetArea({
      name: name,
      description: description,
      creator: userObjectId,
      parent: parentObjectId,
      children: null,
    });
    res
      .status(201)
      .json({ success: true, message: "TargetArea created successfully" });
  }
);
