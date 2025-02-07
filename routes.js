const express = require("express");
const router = express.Router();

// Sample Route
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

module.exports = router;
