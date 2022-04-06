import express from "express";
const router = express.Router();
import * as Network from "../models/network.models.js";

router.route("/").get((req, res) => {
  Network.find()
    .then((networks) => res.json(networks))
    .catch((err) => res.status(400).json("Error: ") + err);
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const token = req.body.token;
  const newNetwork = new Network({ name, url, token });

  newNetwork
    .save()
    .then(() => res.json("Network added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
