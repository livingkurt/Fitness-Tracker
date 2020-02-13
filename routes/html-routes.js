const exercise_view = require("../public/views/exercise_view");
const index_view = require("../public/views/index_view");
const stats_view = require("../public/views/stats_view");
const main_layout = require("../public/views/layouts/main_layout");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members pag
        // res.send(main_layout(index_view(), "../js/api.js", "../js/workout.js", "../js/index.js"));
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/exercise", function (req, res) {
        // If the user already has an account send them to the members page
        // res.send(main_layout(exercise_view(), "../js/api.js", "../js/exercise.js"));
        res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        // If the user already has an account send them to the members page
        // res.send(main_layout(stats_view(), "https://cdn.jsdelivr.net/npm/chart.js@2.8.0", "../js/api.js", "../js/stats.js"));
        res.sendFile(path.join(__dirname, "../public/html/stats.html"));
    });

};

// const views = require("../views");
// const layouts = require("../views/layouts");

// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         // If the user already has an account send them to the members pag
//         res.send(layouts.main_layout(views.index_view()));
//     });

//     app.get("/exercise", function (req, res) {
//         // If the user already has an account send them to the members page
//         res.send(layouts.main_layout(views.exercise_view()));
//     });

//     app.get("/stats", function (req, res) {
//         // If the user already has an account send them to the members page
//         res.send(layouts.main_layout(views.stats_view()));
//     });

// };



