// src/routes/user.routes.js
import { Router } from "express";
const router = Router();

// Obtener información del usuario actual
router.get("/me", async (req: any, res: any) => {
  try {
    const userId = "1"; // req.user?._id; // Middleware de autenticación debería establecer `req.user`
    if (!userId) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    const collection = req.db.collection("users");
    const user = await collection.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error obteniendo usuario actual:", error);
    res.status(500).json({ message: "Error al obtener la información del usuario" });
  }
});

// Obtener notificaciones del usuario
router.get("/:userId/notifications", async (req: any, res: any) => {
  try {
    const { userId } = req.params;

    const collection = req.db.collection("users");
    const user = await collection.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user.notifications || []);
  } catch (error) {
    console.error("Error obteniendo notificaciones:", error);
    res.status(500).json({ message: "Error al obtener las notificaciones" });
  }
});

export default router;
