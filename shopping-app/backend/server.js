const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock Database
let serverLogs = [];
let totalRevenue = 0;

const USERS_DB = {
    "Aayush": "1234",
    "Mohan": "5678",
    "Rahul": "9012"
};


app.post('/api/verify-otp', (req, res) => {
    const { otp, username } = req.body;

    // Check if user exists and OTP matches
    if (USERS_DB[username] && USERS_DB[username] === otp) {
        const log = `Event: ${username} verified via OTP`;
        serverLogs.push(log);
        
        console.log(log);
        res.status(200).send({ 
            message: "Verified", 
            user: username 
        });
    } else {
        res.status(401).send({ message: "Invalid Credentials or OTP" });
    }
});

// API: Process Checkout
app.post('/api/checkout', (req, res) => {
    const { cart, user } = req.body;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalRevenue += total;
    
    const log = `Event: ${user} purchased ${cart.length} items for Rs.${total}`;
    serverLogs.push(log);
    
    res.status(200).send({ success: true, totalRevenue });
});

// API: Get Logs
app.get('/api/logs', (req, res) => {
    res.json({ logs: serverLogs, revenue: totalRevenue });
});


// Add this to your existing backend/server.js

app.post('/api/logout', (req, res) => {
    const { username } = req.body;
    const log = `Event: ${username} logged out`;
    serverLogs.push(log);
    
    console.log(log);
    res.status(200).send({ message: "Logged out successfully" });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));