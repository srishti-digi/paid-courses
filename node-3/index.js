const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./schema/user");
const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json({
    data: users,
    status: true,
  });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    data: user,
    status: true,
  });
});

app.post("/user", async (req, res) => {
  const payload = req.body;
  const newUser = await User.create(payload);
  res.json({
    data: newUser,
    status: true,
  });
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
  res.json({
    success: true,
    data: user,
  });
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await User.deleteOne({ _id: id });
  res.json({
    success: true,
    data,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on http://localhost:${PORT}`);
});
