// Requiring our models and passport as we've configured it
// var user = require("../models/user");
// var workout = require("../models/workout");
const db = require("../models/index");

module.exports = function (app) {


    app.get("/api/workouts", async ({ body }, res) => {
        console.log("Complete")
        const request = await db.Workout.find({})
            res.send(request)


    });

    app.get("/api/workouts/range", async ({ body }, res) => {
        console.log("Range")
        const request = await db.Workout.find({}).populate("workout")
            res.send(request)


    });

    app.put("/api/workouts/:id", async (req, res) => {
        const request = await db.Workout.findOneAndUpdate({ _id: req.params.id }, {
            $push: {exercises: req.body}
        })
        res.send(request)
    });

    app.post("/api/workouts", async ({ body }, res) => {

        const request = await db.Workout.create(body)

        res.send(request)

    });

};
