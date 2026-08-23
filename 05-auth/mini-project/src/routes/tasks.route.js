import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import pool from "../db.js";
import {
  getTasksController,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
  adminDeleteTask,
} from "../controllers/task.controller.js";
const router = Router();



router.get('/', authMiddleware, getTasksController)
router.get("/:id", authMiddleware, getTasksById);
router.post("/", authMiddleware, createTask);
router.patch("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);
router.delete("/tasks/:id", authMiddleware, adminMiddleware, adminDeleteTask);
export default router;