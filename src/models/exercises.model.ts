// src/models/exercises.model.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IExercise extends Document {
    name: string;
    image: string;
    description: string;
}

const ExerciseSchema: Schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

export const Exercise = mongoose.model<IExercise>("Exercise", ExerciseSchema);