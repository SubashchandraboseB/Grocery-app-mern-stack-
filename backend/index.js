// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/.env" });
}

const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/grocery-shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Routes
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

// Middleware
// Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// Cookie Parser
app.use(cookieParser());

// Database Connection
connectDB();

// JSON Parser
app.use(express.json());

// Use Express File Upload
app.use(expressFileUpload());

// Config Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Load Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

// Access Front End Static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Access Front End All URLs
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

