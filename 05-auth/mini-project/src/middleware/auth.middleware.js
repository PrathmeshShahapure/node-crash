
import jwt from "jsonwebtoken";
import "dotenv/config"

export const authMiddleware =  (req, res, next) => { 
  try {
     
    const authheader = req.headers.authorization;
    if (!authheader) {
      return res.status(401).json({ message: "Authentication Req " });
    }
    const [scheme, token] = authheader.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or Expired token." });
  }
  
  
}

