//importing
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const apiRoute = require("./routes/api");
require("dotenv").config();

//Port Number
const PORT = 5000;
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("start"));
app.use(cors());

// Enabling app to use Helmet to secure the code. Disabled the `contentSecurityPolicy` middleware (keeps the rest) due to inline script errors.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Checking if the process is production mode and set for the index.html file from the build folder to be utilized, instead of the public folder.

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//routes
app.use("/api", apiRoute);

app.listen(PORT, function () {
  console.log(`The server is running at port ${PORT}`);
});
