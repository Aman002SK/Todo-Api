const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const tasks = require("./routes/tasks");
const errorHandlerMiddleware = require("./middleware/error-handler");
const NotFound = require("./middleware/not-found");
const connectDB = require("./db/connect");

const app = express();

app.use(express.json());
//app.use(express.static("./public"));

app.use("/api/vi/tasks", tasks);
app.use(errorHandlerMiddleware);
app.use(NotFound);

const port = process.env.PORT || 5000;

console.log(process.env.URI);

const start = async () => {
  try {
    await connectDB(process.env.URI);
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
