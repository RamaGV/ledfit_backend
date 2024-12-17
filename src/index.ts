// src/index.ts
require("dotenv").config();

import express from "express";
import cors from "cors";
const databaseService = require("./services/database.service");
import routinesRoutes from "./routes/routines.routes";
import usersRoutes from "./routes/users.routes";

const app = express();

const port = process.env.PORT || 5000;
const uri = "mongodb://localhost:27017/ledfit";

app.use(express.json()); // Middleware para manejar JSON
app.use(cors({}));

(async () => {
  try {
    await databaseService.connect(uri);
    console.log("Conexión a la base de datos establecida");

    // Middleware para inyectar la base de datos en las solicitudes
    app.use((req: any, res, next) => {
      req.db = databaseService.getDb();
      next();
    });

    // Rutas
    app.use("/api/routines", routinesRoutes);
    app.use("/api/users", usersRoutes);

    // Iniciar servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    console.log("URI de MongoDB:", uri);
    console.error("Error al conectar a la base de datos:", error);
  }
})();
