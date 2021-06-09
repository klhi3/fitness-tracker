const mongoose = require("mongoose");
const {ExerciseSchema} = require('./Exercise.js').schema;


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:  {
       type:  [ExerciseSchema],
       default: undefined,
    },
});

// db.workout.aggregate([
//     { $match: { _id: 1 } },
//     { $addFields: { total_duration: { $concatArrays: [ "$homework", [ 7 ] ] } } }
//  ])

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;