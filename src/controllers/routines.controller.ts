// src/controllers/routines.controller.ts

import { Request, Response } from "express";
import { Routine } from "../models/routines.model"; // Modelo de Mongoose

export const getAllRoutines = async (req: Request, res: Response) => {
  try {
    console.log("Intentando obtener rutinas...");
    const routines = await Routine.find();
    console.log("Rutinas obtenidas:", routines);
    res.status(200).json(routines);
  } catch (error) {
    console.error("Error obteniendo rutinas:", error);
    res.status(500).json({ message: "Error al obtener las rutinas" });
  }
};
