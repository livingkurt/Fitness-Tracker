// Requiring our models and passport as we've configured it
// var user = require("../models/user");
// var workout = require("../models/workout");
const db = require("../models/index");

module.exports = function (app) {


    app.get("/api/workouts", function ({ body }, res) {
        console.log("Complete")
        db.Workout.find({})
            .then((data) => {
                // console.log(data);
                res.json(data);
            })
            .catch((err) => {
                // console.log(err);
                res.json(err);
            })


    });

    app.get("/api/workouts/range", function ({ body }, res) {
        console.log("Range")
        db.Workout.find({})
            .populate("workout")
            .then((data) => {
                // console.log(data);
                res.json(data);
            })
            .catch((err) => {
                // console.log(err);
                res.json(err);
            })


    });

    app.put("/api/workouts/:id", function ({ body }, res) {
        console.log("Put")
        db.Workout.findByIdAndUpdate(body, {
            $set: {
                day: body.day,
                exercise: body.exercise
            }
        }, { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });

    });

    app.post("/api/workouts", function ({ body }, res) {
        console.log("Post")
        db.Workout.create(body)
            .then(db_workout => {
                res.json(db_workout);
            })
            .catch(err => {
                res.json(err);
            });

    });


    // db.Workout.findOne({ _id: Workout._id })
    //     .then((doc) => {
    //         if (doc) {
    //             console.log(doc);
    //         } else {
    //             console.log("no data exist for this id");
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // db.Workout.findOne(body, {
    //     $push: {
    //         type: body.type,
    //         name: body.name,
    //         weight: body.weight,
    //         sets: body.sets,
    //         reps: body.reps,
    //         duration: body.duration
    //     }
    // }, { new: true })
    // .then(db_workout => {
    //     res.json(db_workout);
    // })
    // .catch(err => {
    //     res.json(err);
    // });



    // const workout_id = req.params.id
    // console.log(workout_id)
    // db.Workout.findById(workout_id)
    //     .then((dbWorkout) => {
    //         console.log(dbWorkout);
    //         res.json(dbWorkout);
    //     }).catch((err) => {
    //         console.log(err);
    //         res.json(err);
    //     });

    // // Route for getting some data about our Workout to be used client side
    // app.get("/api/workouts/range", function (req, res) {
    //     console.log(req)
    //     // db.Workout.find({})
    //     //     .then((dbWorkout) => {
    //     //         console.log(dbWorkout);
    //     //         res.json(db_workout);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //         res.json(err);
    //     //     })
    // });

    // db.Library.create({ name: "Campus Library" })
    // .then(dbLibrary => {
    //     console.log(dbLibrary);
    // })
    // .catch(({message}) => {
    //     console.log(message);
    // });

    // app.post("/submit", ({body}, res) => {
    // db.Book.create(body)
    //     .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    //     .then(dbLibrary => {
    //     res.json(dbLibrary);
    //     })
    //     .catch(err => {
    //     res.json(err);
    //     });
    // });

    // app.get("/books", (req, res) => {
    // db.Book.find({})
    //     .then(dbBook => {
    //     res.json(dbBook);
    //     })
    //     .catch(err => {
    //     res.json(err);
    //     });
    // });

    // app.get("/library", (req, res) => {
    // db.Library.find({})
    //     .then(dbLibrary => {
    //     res.json(dbLibrary);
    //     })
    //     .catch(err => {
    //     res.json(err);
    //     });
    // });

    // app.get("/populated", (req, res) => {
    // db.Library.find({})
    //     .populate("books")
    //     .then(dbLibrary => {
    //     res.json(dbLibrary);
    //     })
    //     .catch(err => {
    //     res.json(err);
    //     });
    // });


};
