// TODO: TargetArea
import mongoose, { Schema, Document, model, mongo } from "mongoose";
import { ITargetArea } from "../../interface/exercise/targetArea.interface";

const { ObjectId } = mongoose.Schema.Types;

const targetAreaSchema = new Schema<ITargetArea>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  creator: {
    type: ObjectId,
    ref: "User",
  },
  parent: {
    type: ObjectId,
    ref: "TargetArea",
  },
  children: [
    {
      type: ObjectId,
      ref: "TargetArea",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
export default model<ITargetArea>("TargetArea", targetAreaSchema);
