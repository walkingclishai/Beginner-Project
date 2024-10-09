const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
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

// Users

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullname: String,
});

const User = mongoose.model("users", userSchema);

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

// Courses

const CoursesSchema = new mongoose.Schema({
  grade: Number,
  name: String,
  cover: String,
});

const course = mongoose.model("course", CoursesSchema, "Courses");

app.get("/courses", async (req, res) => {
  try {
    const courses = await course
      .find()
      .select("grade name cover -_id")
      .sort({ grade: 1, name: 1 });
    console.log();
    res.send(courses);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
