import { Schema, model } from "mongoose";
import { IProfile } from "../interface/profile.interface";
const profileSchema = new Schema<IProfile>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      min: [0, "Age cannot be negative"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: function (v: string) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    weight: {
      type: Number,
      min: [0, "Age cannot be negative"],
    },
    height: {
      type: Number,
      min: [0, "Age cannot be negative"],
    },
    //TODO: Add sessions here, follow similar approach as below:
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default model<IProfile>("Profile", profileSchema);
