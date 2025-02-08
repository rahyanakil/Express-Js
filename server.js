const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6060;

// Middleware
app.use(express.json());
app.use(cors());

// Use Routes
app.use("/", routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
