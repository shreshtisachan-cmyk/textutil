require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Text = require("./models/Text");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("TextUtil Backend is running");
});

// GET all texts
app.get("/api/texts", async (req, res) => {
  try {
    const texts = await Text.find().sort({ createdAt: -1 });

    res.json(texts);
  } catch (error) {
    console.error("Error fetching texts:", error.message);

    res.status(500).json({
      message: "Failed to fetch texts"
    });
  }
});

// POST text
app.post("/api/texts", async (req, res) => {
  try {
    if (!req.body.text || req.body.text.trim() === "") {
      return res.status(400).json({
        message: "Text is required"
      });
    }

    const newText = new Text({
      text: req.body.text
    });

    const savedText = await newText.save();

    res.status(201).json(savedText);
  } catch (error) {
    console.error("Error saving text:", error.message);

    res.status(500).json({
      message: "Failed to save text"
    });
  }
});

// DELETE text
app.delete("/api/texts/:id", async (req, res) => {
  try {
    const deletedText = await Text.findByIdAndDelete(req.params.id);

    if (!deletedText) {
      return res.status(404).json({
        message: "Text not found"
      });
    }

    res.json({
      message: "Text deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting text:", error.message);

    res.status(500).json({
      message: "Failed to delete text"
    });
  }
});

// Connect MongoDB FIRST, then start server
async function startServer() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  }
}

startServer();