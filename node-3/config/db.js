const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD } = process.env;

const URI = `mongodb+srv://${DB_USER}:${encodeURIComponent(
  DB_PASSWORD
)}@api-call-demo.p45uelm.mongodb.net/user-db?retryWrites=true&w=majority&appName=api-call-demo`;

const connectDB = () => {
  mongoose
    .connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDB;
