// src/controllers/auth.controller.ts

// import { Request, Response } from "express";
// import { User } from "../models/user.model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { config } from "../config";

export const register = async (req: Request, res: Response) => {
  //   try {
  //     const { email, password } = req.body;
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const user = new User({ email, password: hashedPassword });
  //     await user.save();
  //     res.status(201).json({ message: "Usuario registrado" });
  //   } catch (error) {
  //     res.status(500).json({ error: "Error al registrar usuario" });
  //   }
};

export const login = async (req: Request, res: Response) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ email });
  //     if (!user) return res.status(400).json({ error: "Credenciales inválidas" });
  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch)
  //       return res.status(400).json({ error: "Credenciales inválidas" });
  //     const token = jwt.sign(
  //       { id: user._id, role: user.role },
  //       config.jwtSecret,
  //       { expiresIn: "1h" }
  //     );
  //     res.json({ token });
  //   } catch (error) {
  //     res.status(500).json({ error: "Error al iniciar sesión" });
  //   }
};
