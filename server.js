const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/user");
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});