const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// App config
dotenv.config();

// Connect to DB
const dbPath = process.env.DB_CONNECT;

mongoose.connect(
  dbPath,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Connected to DB!")
);

// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Middlewares
app.use(express.json());

// Routes Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log("Server is running");
});
