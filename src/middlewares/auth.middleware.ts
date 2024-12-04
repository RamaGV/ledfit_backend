// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { config } from "../config";

// export const authenticateJWT = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token, config.jwtSecret, (err, user) => {
//       if (err) return res.sendStatus(403);
//       req.user = user; // Añade la información del usuario al objeto de solicitud
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

// export const authorizeRole = (roles: string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (roles.includes(req.user.role)) {
//       next();
//     } else {
//       res.sendStatus(403);
//     }
//   };
// };
