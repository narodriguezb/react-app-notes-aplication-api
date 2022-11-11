const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
app.use(cors())

const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);


//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongoBd Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));