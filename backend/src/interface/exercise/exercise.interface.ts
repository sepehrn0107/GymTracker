import mongoose, { Document, Schema } from "mongoose";
export interface IExercise extends Document {
  exerciseId: String;
  userId: mongoose.Types.ObjectId;
  name: String;
  description: String;
  targetAreaId: mongoose.Types.ObjectId;
  activityType: String;
  created_at: Date;
  updated_at: Date;
}
