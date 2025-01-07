const express = require("express");
const path = require("path");
const db = require("../db"); // Assuming db.js exists in the backend folder

const router = express.Router();

// Serve the dashboard HTML file
router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API Route to fetch Didonor data
router.get("/api/didonor", (req, res) => {
    const query = "SELECT UserID, FullName, BloodType, UserType FROM user";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching didonor data: " + err.message);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});

// API Route to fetch Pendonor data
router.get("/api/pendonor", (req, res) => {
    const query = "SELECT id, FullName, BloodType, UserType FROM user";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching pendonor data: " + err.message);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});

module.exports = router;
