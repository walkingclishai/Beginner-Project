const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/UntitledDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Basic route
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullname: String,
});

const User = mongoose.model("users", userSchema);

// GET request to retrieve all users
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    console.log();
    res.send(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
