require("./core/storage/db");
const express = require("express");
const cors = require("cors");
const movieRoute = require("./routes/movie.routes");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server is Live : ) On port ${PORT} `);
}); 
