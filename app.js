const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//const sequelize = require('./utils/database')


const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-database','root','toor',{
    dialect:'mysql',
    host:'localhost',
    logging:true
})


const app = express();
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors());
app.use(helmet());
app.use(morgan("common"));

require("dotenv").config();
sequelize.sync()
.then(()=>{
    console.log("Success connection to db")
}).catch(err =>{
    console.log(`Failure to connect to db due to ${err}`)
})
app.get("/api", (req, res) => {
  res.send("Hey There!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
