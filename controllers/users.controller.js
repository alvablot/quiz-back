const express = require("express");
const app = express();

const model = require("../models/users.model");


async function loginUser(req, res) {
  const url = req.url;
  const id = req.params.id;
  let data = req.body;
  result = await model.login(id, data, url);
  if (result === 400)
    return res.status(400).send("Email/password missing");
  if (result === 404) return res.status(404).send("Wrong email/password");
  res.json(result);
}



module.exports = {
  loginUser
};
