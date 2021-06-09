const router = require("express").Router();
const Workout = require("../models/Workout.js");
const Exercise = require("../models/Exercise.js");


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercise:req.body}},
    // Workout.updateOne({
    //     _id: mongojs.ObjectId(req.params.id)
    //   },{
    //     // update exercise
    //         type: req.body.type,
    //         name: req.body.name,
    //         duration: req.body.duration,
    //         weight: req.body.weight,
    //         reps: req.body.reps,
    //         sets: req.body.sets,  
    //   }, 
      (err, data) => {
        if (err) res.send(err)
        else console.log("Updated : ", res);
        res.json(data);       
      })
});


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndDelete(req.body.id)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/submit", (req, res) => {
//     console.log(req.body);
//     db.Workout.insert(req.body, (error, data) => {
//       if (error) res.send(error);
//       else res.send(data);
//     });
//   });


module.exports = router;


