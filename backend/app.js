require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/database");
const cookie = require("cookie-parser");
const userRoutes = require("./routes/user/userRoutes");
const captainRoutes = require("./routes/captain/captainRoutes.js");
const port = process.env.PORT || 5000;
console.log("server", process.env.DATABASE_URL);

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["get", "post", "delete", "put", "patch"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

app.use((err, req, res, next) => {
  const { status = 501, message = "something went wrong" } = err;
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
