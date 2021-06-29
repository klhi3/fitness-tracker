const mongoose = require("mongoose");
// mongoose.Schema.Types.ObjectId : exerciseSchema

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises:  [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type "
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name "
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number,
                    default: 0, 
                },
                reps: {
                    type: Number,
                    default: 0, 
                },
                distance: {
                    type: Number,
                    default: 0, 
                },
                sets: {
                    type: Number,
                    default: 0, 
                },
        }],

        totalDuration: {
            type: Number,
            default: 0,
        },


    },
    // {
        
    // //         toObject: {
    // //         virtuals: true
    // //         },

    //         toJSON: {
    //         virtuals: true 
    //         }
    // }
);

// Create a virtual property `totalDuration` 
// WorkoutSchema
//     .virtual("totalDuration")
//     .get(() => {  
//         const duration = this.exercises.reduce((total, exercise) => {
//             return total + exercise.duration;
//         }, 0);
// });


// workoutSchemakout.aggregate([
//     { $match: { _id: 1 } },
//     { $addFields: { totalDuration: { $concatArrays: [ "$homework", [ 7 ] ] } } }
//  ])

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;