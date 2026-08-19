import { Router } from "express";
import {
  getAllTasks,
  getTasksById,
  createTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const router = Router()


router.get('/', getAllTasks);
router.get("/:id", getTasksById);
router.post("/", createTasks);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
export default router;