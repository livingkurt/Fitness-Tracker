const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number,
    duration: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const ExerciseSchema = new Schema({
//         name: {
//           type: String,
//         },
//         date: {
//             type: Date,
//             name: Date.now
//         },
//         exercise: [
//           {
//             type: Schema.Types.ObjectId,
//             ref: "Workout"
//           }
//         ]
// });
// const Exercise = mongoose.model("Exercise", ExerciseSchema);
// module.exports = Exercise;