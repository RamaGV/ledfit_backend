// src/routes/routines.routes.ts
import { Router } from "express";
const router = Router();

router.get("/all", async (req: any, res: any) => {
  try {
    const collection = req.db.collection("routines");
    const routines = await collection.find().toArray();
    res.json(routines);
  } catch (error) {
    console.error("Error obteniendo rutinas:", error);
    res.status(500).json({ message: "Error al obtener las rutinas" });
  }
});

export default router;
