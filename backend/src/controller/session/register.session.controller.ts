import { Request, Response } from "express";
import { ISession } from "../../interface/session/session.interface";
import { createSession } from "../../services/session.services";
import BadRequestError from "../../errors/badRequest.error";
import asyncHandler from "express-async-handler";
import { ErrorCode } from "../../errors/custom.errors";
import { createSessionSchema } from "../../validation/session.validation";
import { IUserMessage } from "../../middleware/authJWT.middleware";
import { stringToObjectId } from "../../utils/util";

export const registerSession = asyncHandler(
  async (
    req: IUserMessage<Record<string, string>, object, ISession>, // Adjust based on your type definitions
    res: Response
  ) => {
    const { exercises, totalDuration, notes } = req.body;

    const userId = stringToObjectId(req.userData.userId); // Extract user ID from request

    // Check if userId is provided
    if (!userId) {
      throw new BadRequestError("User not found", ErrorCode.BAD_REQUEST);
    }

    // Create a new session object
    const sessionData: ISession = {
      userId: userId,
      exercises: exercises,
      totalDuration: totalDuration,
      notes: notes,
    };

    // Call the createSession function from the service
    const createSessionResult = await createSession(sessionData);

    // Check for success and handle the result
    if (!createSessionResult.success) {
      console.error("Error creating session:", createSessionResult.error);
      throw new BadRequestError(
        createSessionResult.error,
        ErrorCode.BAD_REQUEST
      );
    }

    // Respond with success message
    res.status(201).json({
      success: true,
      message: "Session created successfully",
      data: createSessionResult.data,
    });
  }
);
