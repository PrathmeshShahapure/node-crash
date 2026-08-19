import pool from "../db.js";
export const getAllUsers = async (req, res) => { 

    const results = await pool.query("Select * from users ORDER BY id ASC");
    res.json(results.rows);
};
