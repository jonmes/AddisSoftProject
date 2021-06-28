const express = require('express');
const app = express();

// Import all routes

app.use(express.json());

const employee = require('./routes/employeeRoute');

app.use('/api/v1', employee)

module.exports = app;