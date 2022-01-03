const express = require('express');
const cors = require('cors')
const mongoClient = require("mongodb").MongoClient;
const multer = require('multer')
const upload = multer({
    dest: "../public/uploads"
});

let database;
let mongoUrl = "mongodb://127.0.0.1:27017/photofeed";

const app = express()
app.use(cors())
app.use(express.static("../public"));


app.post('/upload', [upload.single("image")], function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        database = client.db("photofeed");
        let uploads = database.collection("uploads");
        uploads.insertOne({
            author: req.body.author,
            name: req.body.name,
            image: req.file.filename,
            date: new Date()
        }, function (err, result) {
            console.log(result);
        });


    });
    res.send('POST request to the homepage');

});

app.get("/feed", function (req, res) {
    mongoClient.connect(mongoUrl, function (err, client) {
        database = client.db("photofeed");
        let uploads = database.collection("uploads");
        uploads.find()
            .sort({
                date: -1
            })
            .limit(6)
            .toArray(function (err, documents) {
                res.send(documents);
            });
    });
});



app.listen(3000);