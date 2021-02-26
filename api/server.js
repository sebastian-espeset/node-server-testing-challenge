const express = require("express");
const server = express();

const villagerRouter = require('./villagers/villagers-router');
server.use('/villagers',villagerRouter)
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({message:"hello bubblegum" });
});

module.exports = server;