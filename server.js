require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const reviewRoutes = require("./routes/review.route")

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;

//middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Phoenix-commerce-server is running");
});

// bypass route
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

mongoose
  .connect(uri, { useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log("Phoenix-commerce-server is running at ", port);
    });
  })
  .catch((err) => console.log(err));
