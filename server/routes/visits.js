const express = require("express");
const Visit = require("../models/Visit");

const router = express.Router();

// Route to increment visit count
router.get("/", async (req, res) => {
  try {
    let visit = await Visit.findOne();
    if (!visit) {
      visit = new Visit({ count: 1 });
    } else {
      visit.count++;
    }
    await visit.save();
    res.json({ count: visit.count });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
