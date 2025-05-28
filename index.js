const dotenv = require('dotenv');
dotenv.config();
const connectToDataBase = require('./src/database/connect')

connectToDataBase();

require("./modules/express");