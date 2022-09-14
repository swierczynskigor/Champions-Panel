const express = require("express");

const dbName = 'championsPanel'

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/items/get").get(function (req, res) {
      let db_connect = dbo.getDb(dbName);
      db_connect
            .collection("items")
            .find({})
            .toArray(function (err, result) {
                  if (err) throw err;
                  res.json(result);
            });
});

// This section will help you get a single record by id
recordRoutes.route("/items/del").post(function (req, res) {
      let db_connect = dbo.getDb();
      let myquery = { name: req.body.name };
      db_connect.collection("items").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log(myquery.name + " was deleted from collection items");
            res.json(obj);
      });
});

// This section will help you create a new record.
recordRoutes.route("/items/add").post(function (req, response) {
      let db_connect = dbo.getDb();
      let myobj = {
            name: req.body.name,
            //image: req.body.name.replace(' ', '_') + 'Square.webp',
            image: req.body.image,
            category: req.body.category
      }
      console.log('Add item:\n' + JSON.stringify(myobj))
      db_connect.collection("items").insertOne(myobj, function (err, res) {
            if (err) throw err;
            response.json(res);
      });
});

// This section will help you update a record by id.
recordRoutes.route("/champions/add").post(function (req, response) {
      let db_connect = dbo.getDb();
      let myobj = {
            name: req.body.name,
            image: req.body.name.replace(' ', '_') + 'Square.webp',
            builds: req.body.builds
      }
      console.log('Add champion:\n' + JSON.stringify(myobj))
      db_connect.collection("champions").insertOne(myobj, function (err, res) {
            if (err) throw err;
            response.json(res);
      });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
      let db_connect = dbo.getDb();
      let myquery = { _id: ObjectId(req.params.id) };
      db_connect.collection("records").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            response.json(obj);
      });
});

module.exports = recordRoutes;