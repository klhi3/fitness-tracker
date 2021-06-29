const router = require("express").Router();
const db = require("../models");

// get
router.get("/api/workouts", (req, res) => {


    db.Workout.find()
    .sort({ day: 1 })
    .then(data=> {
       res.json(data);
    })
    .catch(err => {
      console.log("get error:"+err);
      res.json(err);
    });
});

// update
router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        {
          // $inc: { totalDuration: req.body.duration },
          $push: {exercise:req.body}
        },
        { new: true })
    .then(data => {
        res.json(data);
    })
    .catch( err => {
        res.json(err);       
    });
});

// create
router.post("/api/workouts", ({ body }, res) => {

    db.Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

// range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .sort({ day: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//delete
router.delete("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.body.id)
    .then(data=> {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;


