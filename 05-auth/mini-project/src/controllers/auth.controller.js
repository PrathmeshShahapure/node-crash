import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

export const registerController = async (req, res) => {
  try {
     const { name, email, password } = req.body;
    const { success ,error} = registerSchema.safeParse(req.body);
    if (!success) { 
      console.log({ message: error.issues[0].message });
      return res.status(400).json({message:error.issues[0].message})
    }
    const isemailUni = await pool.query("select email from users where email=$1 ", [email]);
    
    if (isemailUni.rows.length > 0)
    {
      return res.status(409).json({
        message: "Email already exists",
      });
      
    }
     const hashed = await bcrypt.hash(password, 10);

     const result = await pool.query(
       "insert into users(name,email,password) values($1,$2,$3) RETURNING id, name, email",
       [name, email, hashed],
     );

     res.json({ message: "Users Registered Successfully", data:result.rows });
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
 
};

export const loginController = async (req, res) => { 
  try {
    const { email, password } = req.body;
    console.log(email);
      const { success, error } = loginSchema.safeParse(req.body);
      if (!success) {
        return res.status(400).json({ message: error.issues[0] });
      }
      const result=await pool.query('select * from users where email=$1',[email])
    if (result.rows.length == 0) { 
      return res.status(400).json({message:"User does not found "})
    }
    const { id:user_id,name, email: userEmail, password:HashedPassword ,role} = result.rows[0];
    const isMatch = await bcrypt.compare(password, HashedPassword);
    if (!isMatch) { 
      return res.status(401).json({
        message: "Wrong password",
      });

    }
    const sec = process.env.JWT_SEC;
    console.log(role);
    const token = jwt.sign({ user_id, name,role }, sec, {expiresIn:'2d'})
    return res.json({message:`Wellcome ${name}`,token})
     
    
  } catch (error) {
     return res.status(500).json({
       message: "Internal server error",
     });
    
  }


  

}