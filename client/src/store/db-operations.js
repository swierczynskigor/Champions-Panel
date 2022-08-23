import mongoose from "mongoose";
const opers = require("./modules/Operations.js")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
      author: ObjectId,
      title: String,
      body: String,
      date: Date
});

let server = 'mongodb+srv://maseliczarny:zaq12wsx@cluster0.u7oouu0.mongodb.net/?retryWrites=true&w=majority/championPanel'
mongoose.connect(server, {
      useNewUrlParser: true,
      useUnitfiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
}).then(() => {
      console.log("DB connected!!!")
}).catch(err => {
      console.log(err)
})
// let db = 'championsPanel'

export function saveData(col, obj) {
      mongoose.connect(server, function (err, db) {
            if (err) {
                  return 'error'
            }
            else {
                  db.createCollection(col, function (errr, coll) { })
                  console.log("Connected")
                  opers.showDB(db, function (list) {
                        return JSON.stringify(list)
                  })
            }
      })
}



export function makeSureDBexists() {
      let list
      mongoose.connect(server, function (err, db) {
            if (err) console.log("nie działa :(")
            else {
                  db.admin().listDatabases(function (err, dbs) {
                        if (err)
                              console.log(err)
                        else {
                              list = dbs.databases.map(item => {
                                    if (item.name !== "admin" && item.name !== "config" && item.name !== "local")
                                          return item.name
                              })

                        }
                  })
                  if (list.length > 0) {
                        return list
                  } else {
                        db.createCollection("championsPanel", function (err, coll) {
                              console.log("defaultCol were added")
                        })
                  }
            }
      })
}