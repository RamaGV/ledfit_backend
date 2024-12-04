// src/models/routines.model.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IRoutine extends Document {
  title: string;
  level: string;
  rounds: any[]; // Ajusta esto según la estructura exacta
  totalTime: string;
  group: string;
  favs: number;
  isBookmarked: boolean;
  image: string;
}

const RoutineSchema: Schema = new Schema({
  title: { type: String, required: true },
  level: { type: String, required: true },
  rounds: { type: Array, required: true },
  totalTime: { type: String, required: true },
  group: { type: String, required: true },
  favs: { type: Number, required: true },
  isBookmarked: { type: Boolean, required: true },
  image: { type: String, required: true },
});

export const Routine = mongoose.model<IRoutine>("Routine", RoutineSchema);
