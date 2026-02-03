const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/add', (req, res) => {
    tasks.push(req.body.task);
    console.log('--- Task Added successfully ---');
    res.redirect('/');
});

app.post('/edit', (req, res) => {
    const { index, newTask } = req.body;
    tasks[index] = newTask;
    console.log(`--- Task updated successfully ---`);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    tasks.splice(index, 1);
    console.log(`--- Task deleted successfully ---`);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
    console.log('Monitoring requests...');
});