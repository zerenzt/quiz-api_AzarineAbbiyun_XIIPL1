const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const quizRoute = require("./router/quiz");
const jobsheetRoute = require("./router/jobsheet");

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const db = require("./models");
db.sequalize.sync();

app.get("/", (req, res) => {
  res.send("Quiz ExpressJS API by Peika");
});

app.use("/api/quizzes", quizRoute);
app.use("/api/jobsheet", jobsheetRoute);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}!`)
);