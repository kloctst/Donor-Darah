const express = require("express");
const db = require("../db");

const router = express.Router();

// Handle money donation for recipients
router.post("/donate-money", (req, res) => {
    const { UserID, Amount, Message } = req.body;

    if (!UserID || !Amount || !Message) {
        return res.status(400).send("All fields are required (UserID, Amount, Message).");
    }

    const query = `
        INSERT INTO donation (UserID, Amount, Message) 
        VALUES (?, ?, ?)`;

    db.query(query, [UserID, Amount, Message], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Database error: " + err.message);
        }
        res.send("Donation recorded successfully.");
    });
});

// Handle blood donation
router.post("/donate-blood", (req, res) => {
    const { DonorID, Location, RecipientID } = req.body;

    if (!DonorID || !Location || !RecipientID) {
        return res.status(400).send("Missing 'DonorID', 'Location', or 'RecipientID'");
    }

    const query = `
        INSERT INTO blooddonation (DonorID, Location, DonationDate, RecipientID) 
        VALUES (?, ?, NOW(), ?)`;

    db.query(query, [DonorID, Location, RecipientID], (err) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Database error: " + err.message);
        }
        res.send("Blood donation recorded successfully");
    });
});


module.exports = router;
