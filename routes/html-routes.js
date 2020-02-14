const exercise_view = require("../public/views/exercise_view");
const index_view = require("../public/views/index_view");
const stats_view = require("../public/views/stats_view");
const main_layout = require("../public/views/layouts/main_layout");
var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.send(main_layout(index_view(), "../js/api.js", "../js/workout.js", "../js/index.js"));
    });

    app.get("/exercise", function (req, res) {
        res.send(main_layout(exercise_view(), "../js/api.js", "../js/exercise.js"));
    });

    app.get("/stats", function (req, res) {
        res.send(main_layout(stats_view(), "https://cdn.jsdelivr.net/npm/chart.js@2.8.0", "../js/api.js", "../js/stats.js"));
    });

};



