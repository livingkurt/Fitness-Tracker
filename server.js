// Import Express
const express = require("express");
// Import Mongoose
const mongoose = require("mongoose");

// Set Port to Heroko Choice or 3000
const PORT = process.env.PORT || 3000;

// Assign Express to variable
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use the public folder
app.use(express.static("public"));

// Use mongodb database, so there is no need to use robo 3T
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });

// Import html routes
require("./routes/html-routes.js")(app);
// Import api routes
require("./routes/api-routes.js")(app);

// Listen to Port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});