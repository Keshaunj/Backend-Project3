require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;
const phoneNumber = require("./Backend/models/phoneNumber"); //

const phoneNumberRoutes = require("./routes/phoneNumberRoutes"); //

const phoneNumberControllers = require("./Backend/controllers/phoneNumberController");

const lookupPhoneNumberAPI = require("./Backend/controllers/lookupPhoneNumberAPI");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  console.log("GET /api/phone was triggered!");
  res.json({ message: "All phone numbers" });
});

app.get("/api/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get(
  "/api/phone/validate/:phoneNumber",
  phoneNumberControllers.validatePhoneNumber
);



app.get("/api/phone/validate/:phoneNumber", async (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const apiUrl = `${process.env.API_URL}${phoneNumber}`;

  try {
    
    const response = await axios.get(apiUrl, {
      params: { apikey: process.env.API_KEY }
    });
    res.json(response.data);  
  } catch (error) {
    res.status(500).json({ message: "Error validating phone number" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
