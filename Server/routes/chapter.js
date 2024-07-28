// routes/chapter.js

const express = require("express");
const router = express.Router();

// Dummy data for demonstration
const pickupOptions = [
  { id: 1, value: 'option1', label: 'Option 1' },
  { id: 2, value: 'option2', label: 'Option 2' },
  // Add more options as needed
];

// Route to get pickup options
router.get("/pickup-options", (req, res) => {
  res.json(pickupOptions); // Return an array of pickup options
});

module.exports = router;
