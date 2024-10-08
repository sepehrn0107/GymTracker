// TODO: TargetArea
import mongoose, { Schema, Document, model, mongo } from "mongoose";
import { ITargetArea } from "../../interface/exercise/targetArea.interface";

const { ObjectId } = mongoose.Schema.Types;

const targetAreaSchema = new Schema<ITargetArea>({
  name: {
    type: String,
    required: true,
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
});
export default model<ITargetArea>("TargetArea", targetAreaSchema);
