const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// --- PostgreSQL Connection ---
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'awt',
    password: '',
    port: 5432,
});

// Create table if it doesn't exist (Runs on startup)
const initDb = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS todo_tasks (
            id SERIAL PRIMARY KEY,
            task_text TEXT NOT NULL
        )
    `);
};
initDb();

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todo_tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add a task
app.post('/add', async (req, res) => {
    try {
        await pool.query('INSERT INTO todo_tasks (task_text) VALUES ($1)', [req.body.task]);
        console.log('--- Task Added to DB ---');
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Edit a task
app.post('/edit', async (req, res) => {
    try {
        const { id, newTask } = req.body; // Note: switched 'index' to 'id'
        await pool.query('UPDATE todo_tasks SET task_text = $1 WHERE id = $2', [newTask, id]);
        console.log(`--- Task updated in DB ---`);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete a task
app.post('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await pool.query('DELETE FROM todo_tasks WHERE id = $1', [id]);
        console.log(`--- Task deleted from DB ---`);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
