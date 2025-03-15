const router = require('express').Router();

// Test route to check if API router is working
router.post('/test', function(req, res) {      // Define a POST endpoint at /api/test
  res.json({ requestBody: req.body });         // Echo back the request body as JSON
});

module.exports = router; 