//Need the require path here

var path = require("path");


//Need the routes to the index.html and notes.html file (structure from class activities)

module.exports = function (app) {
    //Html get request to show notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //Html get request to show index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};