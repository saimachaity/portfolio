var express= require("express");
var app = express();



app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


app.get ("/", function (req, res){
    res.sendFile( __dirname + "/index.html");
})


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server is running");
});
