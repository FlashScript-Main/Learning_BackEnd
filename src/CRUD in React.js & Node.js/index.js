/**
 * Headers
 */
const express = require('express')
const bodyParser = require('body-parser');
const port = 1337;
const app = express();
app.use(bodyParser.json());
/**
 * Code Body
 */

const connectDb = require ('./config/db'); // import 
connectDb();

// Route
app.use('/', require('./routes/router'));

/**
 * Server listner
 */
app.listen(port, () => {
  console.log(`App opened at port > ${port}!`)
});


