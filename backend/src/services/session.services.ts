import SessionModel from "../model/session/session.model";

import { ISession } from "../interface/session/session.interface";
// Function to get a session by its ID
export async function getSessionById(sessionId: string) {
  try {
    const session = await SessionModel.findById(sessionId)
      .populate("exercises.exerciseId") // Populate the exercise data
      .exec();

    if (!session) {
      return { data: null, success: false, error: "Session not found" };
    }

    return { data: session, success: true };
  } catch (error) {
    console.error("Error retrieving session by ID:", error);
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Function to get sessions by user ID
export async function getSessionsByUserId(userId: string) {
  try {
    const sessions = await SessionModel.find({ userId })
      .populate("exercises.exerciseId") // Populate the exercise data
      .exec();

    return { data: sessions, success: true };
  } catch (error) {
    console.error("Error retrieving sessions by user ID:", error);
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getSessionsByExerciseId(exerciseId: string) {
  try {
    const sessions = await SessionModel.find({
      "exercises.exerciseId": exerciseId,
    })
      .populate("exercises.exerciseId") // Populate the exercise data
      .exec();

    return { data: sessions, success: true };
  } catch (error) {
    console.error("Error retrieving sessions by exercise ID:", error);
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Function to create a new session
export async function createSession(userData: Partial<ISession>) {
  try {
    // If validation passes, create the session
    const result = await SessionModel.create(userData);
    return { data: result, success: true };
  } catch (error) {
    console.error("Error creating session:", error); // Log the error for debugging
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
