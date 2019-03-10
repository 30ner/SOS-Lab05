var cool = require("cool-ascii-faces");

var express =require("express");

var app = express();

var PORT = process.env.PORT || 80

app.get("/",(request,response) => {
    response.send(cool());
    console.log("New request");
})

app.listen(PORT,()=>{
    console.log("ja ja ja")
})

console.log(cool());