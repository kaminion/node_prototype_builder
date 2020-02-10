const express = require("express");
const app = express();

app.set("view engine", "pug"); // 뷰엔진설정
app.set("views", "./views"); // 뷰엔진 디렉터리설정

app.use("/", express.static("./public"));


app.get("/", (req, res) => {
    res.send("asda" + process.env.domainName);

})


module.exports = app;