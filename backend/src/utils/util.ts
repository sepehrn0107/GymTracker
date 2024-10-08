import { Request } from "express";
import mongoose, { Types } from "mongoose";
import jwt from "jsonwebtoken";

export const extractTokenfromHeader = (req: Request) => {
  const authHeader =
    req.headers.authorization || (req.headers.Authorization as string);
  if (!authHeader?.startsWith("Bearer ")) {
    return false;
  }
  return authHeader.split(" ")[1];
};

export function generateRandom6DigitString() {
  const random6DigitNumber = Math.floor(100000 + Math.random() * 900000);
  return String(random6DigitNumber);
}

export const getUserIdFromToken = (req: Request): string | null => {
  // 1. Extract the token from the request header
  const token = extractTokenfromHeader(req);

  if (!token) {
    return null; // No token found
  }

  try {
    // 2. Verify the token and extract the payload (which contains the userID)
    const decoded = jwt.verify(token, process.env.JWT as string) as {
      userID: string;
    };

    // 3. Return the userID from the decoded payload
    return decoded.userID;
  } catch (error) {
    console.error("Invalid token", error);
    return null; // Invalid token
  }
};

export const stringToObjectId = (id: string): Types.ObjectId => {
  // Check if the id is a valid ObjectId string
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(
      "Invalid ObjectId: The provided string does not represent a valid ObjectId."
    );
  }

  // If valid, return a new ObjectId
  return new mongoose.Types.ObjectId(id);
};
