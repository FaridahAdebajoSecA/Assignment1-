const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // Allow requests from frontend (React)
app.use(express.json()); // Parse JSON request bodies

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to my portfolio backend!");
});

// Dummy Data
const education = [
  { degree: "Diploma in Computer Programming", institution: "Humber College", year: "2025" },
  { degree: "BSc in Physics", institution: "Babcock University", year: "2020" }
];

const experience = [
  { title: "Computer Programming Student", company: "Humber College", year: "2023-Present" },
  { title: "Research Assistant", company: "Babcock University", year: "2020-2023" }
];

const overview = {
  name: "Faridah Adebajo",
  bio: "I am a Computer Programming student at Humber College with a strong interest in software development, data analysis, and the application of modern technologies. My focus includes web and mobile app development, object-oriented programming, and the integration of machine learning techniques into practical applications."
};

// API Endpoints
app.get("/getEdu", (req, res) => {
  res.json(education);
});

app.get("/getExp", (req, res) => {
  res.json(experience);
});

app.get("/getOverview", (req, res) => {
  res.json(overview);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
