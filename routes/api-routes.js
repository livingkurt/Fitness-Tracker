// Import your models
const Workout = require("../models/Workout");

// Export API Routes to Express
module.exports = function (app) {

    // Get Last Workout
    app.get("/api/workouts", async ({ body }, res) => {
        // Find all exercises in workout
        const request = await Workout.find({})
        // Send the request back to the front end
        res.send(request)
    });

    app.get("/api/workouts/range", async ({ body }, res) => {
        // Find all workouts
        const request = await Workout.find({}).populate("workout")
        // Send the request back to the front end
        res.send(request)
    });

    app.put("/api/workouts/:id", async (req, res) => {
        // Find the workout that was created and update it with an exercise
        const request = await Workout.findOneAndUpdate({ _id: req.params.id }, {
            // Append the Exercise to the workout object
            $push: { exercises: req.body }
        })
        // Send the request back to the front end
        res.send(request)
    });

    app.post("/api/workouts", async ({ body }, res) => {
        // Create an empty workout object ready for exercises to get put into it
        const request = await Workout.create(body)
        // Send the request back to the front end
        res.send(request)
    });

};

