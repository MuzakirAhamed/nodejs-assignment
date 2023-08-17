const express = require("express");
const User = require("./Models/User");
const routes = require("./Routes/userRoutes")
const authRoutes = require("./Routes/authRoutes")
const app = express();
app.use(express.json());
app.use(authRoutes)
app.use(routes)
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Muzakir:Edureka%40123@zomato.erpoqwh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to mongoDB"))
  .catch(() => console.log("Error connecting the db"));

app.listen(8080, () => console.log("Server listening"));
