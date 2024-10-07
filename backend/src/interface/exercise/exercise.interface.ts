import { Document, Schema } from "mongoose";

export interface IExercise extends Document {
  userId: Schema.Types.ObjectId;
  name: String;
  description: String;
  bodypart: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
}
