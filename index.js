const express = require("express");


const app = express();
port = 3000;

app.listen(port, function(){
    console.log("prototype-builder on");
});

app.get("/", (req, res)=>{
    res.send("asda");
})