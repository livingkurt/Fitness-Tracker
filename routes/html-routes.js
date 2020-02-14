// Import your views
const exercise_view = require("../public/views/exercise_view");
const index_view = require("../public/views/index_view");
const stats_view = require("../public/views/stats_view");
const main_layout = require("../public/views/layouts/main_layout");

module.exports = function (app) {
    // HTML Route for /
    app.get("/", function (req, res) {
        // Put the index_view.js inside of the main_layout.js with these 3 different script src's
        res.send(main_layout(index_view(), "../js/api.js", "../js/workout.js", "../js/index.js"));
    });
    // HTML Route for /exercise
    app.get("/exercise", function (req, res) {
        // Put the exercise_view.js inside of the main_layout.js with these 3 different script src's
        res.send(main_layout(exercise_view(), "../js/api.js", "../js/exercise.js"));
    });
    // HTML Route for /stats
    app.get("/stats", function (req, res) {
        // Put the stats_view.js inside of the main_layout.js with these 3 different script src's
        res.send(main_layout(stats_view(), "https://cdn.jsdelivr.net/npm/chart.js@2.8.0", "../js/api.js", "../js/stats.js"));
    });

};



