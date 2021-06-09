const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
    },
    reps: {
        type: Number,
    },

    sets: {
        type: Number,
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;