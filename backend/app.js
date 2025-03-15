const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app; 