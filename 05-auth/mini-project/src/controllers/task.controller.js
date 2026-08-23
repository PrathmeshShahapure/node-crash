import pool from "../db.js";

export const getTasksController = async (req, res) => {
  try {
    const id = req.user.user_id;
    console.log(id);
    const results = await pool.query("select * from tasks where user_id=$1", [
      id,
    ]);
    if (results.rows.length <= 0) {
      return res.json({ message: "No Tasks Found" });
    }
    res.json(results.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getTasksById = async (req, res) => {
  try {
    const tasksId = req.params.id;
    const userId = req.user.user_id;
    const results = await pool.query(
      "select * from tasks where id=$1 and user_id=$2",
      [tasksId, userId],
    );

    if (results.rowCount == 0) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    return res.json(results.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { title } = req.body;
    const results = await pool.query(
      "insert into tasks (title,user_id ) values($1,$2) returning *",
      [title, userId],
    );

    return res.json(results.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const tasksId = req.params.id;
    const userId = req.user.user_id;
    const { title, completed } = req.body;
    const results = await pool.query(
      "update  tasks  set title=$1,completed=$2 where user_id=$3 and id=$4 returning *",
      [title, completed, userId, tasksId],
    );
    if (results.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.json(results.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const tasksId = req.params.id;
    const userId = req.user.user_id;
    const results = await pool.query(
      "delete from tasks   where user_id=$1 and id=$2 returning *",
      [userId, tasksId],
    );
    if (results.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    return res.json(results.rows);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const adminDeleteTask = async (req, res) => {
  try {
    console.log("riunning")
    const taskId = req.params.id;
    console.log(taskId," params")

    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [taskId],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.json({
      message: "Task deleted successfully",
      data: result.rows,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};