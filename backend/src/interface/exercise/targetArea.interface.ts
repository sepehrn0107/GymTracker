// TODO: TargetArea
import mongoose, { Document, Schema } from "mongoose";

export interface ITargetArea extends Document {
  name: String;
  parent: mongoose.Types.ObjectId;
  children: [mongoose.Types.ObjectId];
}
