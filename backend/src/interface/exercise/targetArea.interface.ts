// TODO: TargetArea
import mongoose, { Document, Schema } from "mongoose";

export interface ITargetArea extends Document {
  name: String;
  description: String;
  creator: mongoose.Types.ObjectId;
  parent: mongoose.Types.ObjectId;
  children: [mongoose.Types.ObjectId];
  created_at: Date;
  updated_at: Date;
}
