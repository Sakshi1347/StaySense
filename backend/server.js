process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const homestayRoutes = require("./routes/homestayroutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/airoutes");
const errorHandler = require("./middleware/errorMiddleware");

require("./config/passport");
connectDB();

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(
  session({
    secret: process.env.JWT_SECRET || "staysense-session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: {
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);

app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "StaySense AI Backend Running Successfully",
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
