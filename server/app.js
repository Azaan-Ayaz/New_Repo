const express = require("express");
const path = require("path");
const dataBase = require("./Database/dataBase");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./Routes/contactRoute");
const dotenv = require("dotenv");
const colors = require("colors");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000 || process.env.zREMOTE_SERVER_API;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// API routes
app.use("/api", router);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});

dataBase();
