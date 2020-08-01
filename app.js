const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
const sequelize = require("./utils/database");
const authRoute = require("./routes/authRoute");
const notesRoute = require("./routes/notesRoute");

const User = require("./models/user");
const Notes = require("./models/notes");

const app = express();
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use("/app", notesRoute);
app.use("/app", authRoute);

app.get("/api", (req, res) => {
  res.send("Hey There!");
});

Notes.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Success connection to db");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.log(`Failure to connect to db due to ${err}`);
  });
