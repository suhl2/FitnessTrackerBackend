const express = require('express');
const router = express.Router();

// GET /api/activities/:activityId/routines
app.get("/api/activities/:activityId/routines", (req, res) => {
  res.send('Routine activities')
})
// GET /api/activities
app.get("/api/activities", (req, res) => {
  res.send('Routine activities')
})

// POST /api/activities

// PATCH /api/activities/:activityId

module.exports = router;
