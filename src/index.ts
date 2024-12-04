// src/index.ts

require("dotenv").config();

const databaseService = require("./services/database.service");
const routinesRoutes = require("./routes/routines.routes");
import express from "express";
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;
const uri = "mongodb://localhost:27017/ledfit";

app.use(express.json()); // Middleware para manejar JSON

app.use(cors()); // Middleware para habilitar CORS

(async () => {
  try {
    await databaseService.connect(uri);
    console.log("Conexión a la base de datos establecida");

    app.use((req: any, res, next) => {
      req.db = databaseService.getDb();
      next();
    });

    // Rutas
    app.use("/api/routines", routinesRoutes);

    // Iniciar servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    console.log("URI de MongoDB:", uri);
    console.error("Error al conectar a la base de datos:", error);
  }
})();
