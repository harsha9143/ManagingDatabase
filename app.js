const express = require("express");
const studentRouter = require("./routes/studentRouter");
const db = require("./utils/dbUtil");

const {
  Student,
  Department,
  IdentityCard,
  Courses,
  StudentCourses,
} = require("./models/index");
const courseRouter = require("./routes/courseRouter");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  if (req.url === "/") {
    return res.send("<h1>Welcome to home page</h1>");
  }
  next();
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Error 404 - page not found</h1>");
});

const PORT = 4000;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `connection eshtablished successfully http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("Server connection failed");
  });
