// src/routes/exercises.routes.ts
import { Router } from "express";
const router = Router();

router.get("/all", async (req: any, res: any) => {
  try {
    const collection = req.db.collection("exercises");
    const exercises = await collection.find().toArray();
    res.json(exercises);
  } catch (error) {
    console.error("Error obteniendo ejercicios:", error);
    res.status(500).json({ message: "Error al obtener los ejercicios" });
  }
});

export default router;
