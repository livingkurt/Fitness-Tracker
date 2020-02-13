const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: String,
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"

    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const WorkoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: Date.now 
//     },
//     type: String, 
//     name: String,
//     duration: Number,
//     weight: Number, 
//     reps: Number, 
//     sets: Number
// });
// const Workout = mongoose.model("Workout", WorkoutSchema);
// module.exports = Workout;