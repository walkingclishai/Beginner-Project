const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
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

    res.send(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

// log in

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const thisUser = await User.findOne({ email });

    if (!thisUser) {
      return res.send("This email doesn't exist");
    }

    if (thisUser.password == password) {
      res.send("Log in Successfully");
    } else {
      res.send("Incorrect password");
    }
  } catch (err) {
    console.error(err);
    res.send("Server error");
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

// Books

const booksSchema = new mongoose.Schema({
  tile: String,
  author: String,
  cover: String,
  grade: Number,
});

const books = mongoose.model("books", booksSchema);

app.get("/books", async (req, res) => {
  try {
    const { gradeNumber } = req.query;

    const bookDetails = await books.find({ grade: gradeNumber }).select("-_id");
    console.log();
    res.send(bookDetails);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
