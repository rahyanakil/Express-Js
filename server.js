const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes"); // Import routes

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cors()); // Enable CORS
app.use(helmet()); // Secure HTTP headers
app.use(morgan("dev")); // Logger

// Use Routes
app.use("/api", routes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
