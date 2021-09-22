const express = require("express");
const axios = require("axios");
const router = express.Router();

//Fetching the API
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${req.query.name}&limit=28&entity=${req.query.type}`
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
