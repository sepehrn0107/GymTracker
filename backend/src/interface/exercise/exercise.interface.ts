import mongoose, { Document, Schema } from "mongoose";

export interface IExercise extends Document {
  exerciseId: String;
  userId: mongoose.Types.ObjectId;
  name: String;
  description: String;
  bodypart: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}
