const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
path = require("path");

const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();
// const routes = require(path.join(__dirname, "./controllers/controller.js"));

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
      useFindAndModify: false
    }
  );

// routes
// app.use(require("./routes/api.js"));
// app.use(require("./api.js"));
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});













