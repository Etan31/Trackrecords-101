const express = require("express");
const http = require("http");
const app = express();
const passport = require("passport");
const server = http.createServer(app);
const path = require('path');
const pg = require('pg');
const fs = require('fs');
const { pool } = require('./dbConfig');



const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));