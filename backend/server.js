const passport = require("passport");
const session = require("express-session");

const connectDB = require("./config/db");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const homestayRoutes = require("./routes/homestayRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
require("./config/passport");
connectDB();

const app = express();
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 2,
    message: {
  message: "Too many login attempts. Please try again after 15 minutes."
},
});


app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);

app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use("/api/homestays", homestayRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "StaySense AI Backend Running Successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});