import pool from "../db.js";

export const getAllTasks = async (req, res) => {
  const results = await pool.query("select * from tasks ORDER BY id ASC");
  res.json(results.rows);
};

export const getTasksById = async (req, res) => {
  const { id } = req.params;
  const results = await pool.query(
    "select * from tasks where id=$1 ORDER BY id ASC",
    [id],
  );
  if (results.rows.length == 0) {
    res.status(404).json("Not Found");
  }
  res.json(results.rows);
};

export const createTasks = async (req, res) => {
  const { title, user_id } = req.body;
  const results = await pool.query(
    "insert into tasks (title,user_id) values($1,$2) returning*",
    [title, user_id],
  );
  res.status(201).json(results.rows[0]);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const results = await pool.query(
    "update tasks set title=$1,completed=$2 where id=$3 returning *",
    [title, completed, id],
  );
  if (results.rows.length === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(results.rows[0]);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    `DELETE FROM tasks
         WHERE id = $1
         RETURNING *`,
    [id],
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json({
    message: "Task deleted successfully",
    task: result.rows[0],
  });
};