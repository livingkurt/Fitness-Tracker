// Import Mongoose
const mongoose = require("mongoose");
// Assign Schema to a variable
const Schema = mongoose.Schema;
// Create a workout object maker
const WorkoutSchema = new Schema({
    // The current day
    day:
    {
        type: Date,
        default: Date.now()
    },
    // The exercises
    exercises: [Object],
    // The total duration the workouts have added up to
    totalDuration: Number

});

// Mongoose Compiles a model for you with the name "Workout" and with the model schema your provided
const Workout = mongoose.model("Workout", WorkoutSchema);
// Export your workout model to be used in your server
module.exports = Workout;
