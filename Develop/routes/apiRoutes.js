//Need fs require here
var fs = require("fs");

// Need path require here  for directory 
var path = require("path");

//Need a db directory and pathway?
const database = path.resolve(__dirname, "../db");

// Will I need to start the counter with a variable?? 
let idCounter = 1;

//API routes here
module.exports = function (app) {
    //API GETrequest for the notes in database file
    app.get("/api/notes", function (req, res) {
        fs.readFile(path.resolve(database, "db.json"), "utf8", function (err, data) {
            res.json(JSON.parse(data));
        });
    });

    //API POST for notes in the database file
    app.post("/api/notes", function (req, res) {

    })



    //API DELETE



}


