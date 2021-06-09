var path = require("path");


const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//   module.exports = function(app) {
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
//   };
  
module.exports = router;

