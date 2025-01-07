const express = require("express");
const path = require("path");
const db = require("../db");

const router = express.Router();

// Serve the registration HTML file
router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "registeration.html"));
});


// Handle registration form submission
router.post("/register", (req, res) => {
    const { FullName, Email, Password, Phone, Address, BloodType, UserType } = req.body;

    if (!FullName || !Email || !Password || !Phone || !Address || !BloodType || !UserType) {
        return res.status(400).send("All fields are required.");
    }

    const query = "INSERT INTO user (FullName, Email, Password, Phone, Address, BloodType, UserType) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [FullName, Email, Password, Phone, Address, BloodType, UserType], (err) => {
        if (err) {
            console.error("Error inserting data: " + err.message);
            return res.status(500).send("Error saving data to the database.");
        }

        // Success response with navigation button
        res.send(`
            <h2>Registration Successful!</h2>
            <form action="/login" method="GET">
                <button type="submit">Back to Didonor Login</button>
            </form>
        `);
    });
});


module.exports = router;
