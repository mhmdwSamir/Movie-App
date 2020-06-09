require("./core/storage/db");
const express = require("express");
const cors = require("cors");
const movieRoute = require("./routes/movie.routes");
const authRoute = require("./routes/auth.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(" Server is Live : )  ");
});
