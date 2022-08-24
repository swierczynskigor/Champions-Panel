const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record.js"));
// get driver connection
const dbo = require("./db/conn");
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb' }));



app.listen(port, () => {
      // perform a database connection when server starts
      dbo.connectToServer(function (err) {
            if (err) console.error(err);

      });
      console.log(`Server is running on port: ${port}`);
});