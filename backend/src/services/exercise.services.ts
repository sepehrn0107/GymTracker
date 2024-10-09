//TODO Exercise
import { FilterQuery, QueryOptions, Schema, UpdateQuery } from "mongoose";
import { IExercise } from "../interface/exercise/exercise.interface";
import ExerciseModel from "../model/exercise/exercise.model";

export async function findAllExercises() {
  return await ExerciseModel.find();
}

export async function findExerciceById(id: String) {
  return await ExerciseModel.findById(id);
}

export async function findExerciceByName(name: String) {
  return await ExerciseModel.find({ name: name });
}
export async function findExerciseByTargetArea(bp: Schema.Types.ObjectId) {
  return await ExerciseModel.find({ targetArea: bp });
}
export async function findExerciseByActivityType(ct: Schema.Types.ObjectId) {
  return await ExerciseModel.find({ activityType: ct });
}
export async function createExercise(userData: Partial<IExercise>) {
  try {
    const result = await ExerciseModel.create(userData);
    return { data: result, success: true };
  } catch (error) {
    console.error("Error creating exercise:", error); // Log the error for debugging
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function updateExerciseById(
  id: string,
  update: UpdateQuery<IExercise>,
  options: QueryOptions = { new: true }
) {
  try {
    const result = await ExerciseModel.findByIdAndUpdate(id, update, options);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function deleteExerciseById(id: string) {
  return await ExerciseModel.deleteOne({ _id: id });
}
