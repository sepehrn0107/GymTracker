// TODO: TargetArea
import { FilterQuery, QueryOptions, Schema, UpdateQuery } from "mongoose";
import { ITargetArea } from "../interface/exercise/targetArea.interface";
import targetAreaModel from "../model/exercise/targetArea.model";

export async function findAllTargetAreas() {
  return await targetAreaModel.find();
}

export async function findTargetAreaById(id: String) {
  return await targetAreaModel.findById(id);
}

export async function findTargetrAreaByName(name: String) {
  return await targetAreaModel.find({ name: name });
}
export async function findTargetAreaByParentId(id: String) {
  return await targetAreaModel.find({ parent: id });
}
export async function findTargetAreaByCreatorId(id: String) {
  return await targetAreaModel.find({ creator: id });
}
export async function createTargetArea(userData: Partial<ITargetArea>) {
  try {
    const result = await targetAreaModel.create(userData);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function updateTargetAreaById(
  id: string,
  update: UpdateQuery<ITargetArea>,
  options: QueryOptions = { new: true }
) {
  try {
    const result = await targetAreaModel.findByIdAndUpdate(id, update, options);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function deleteTargetAreaById(id: string) {
  return await targetAreaModel.deleteOne({ _id: id });
}
