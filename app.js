const express = require("express");
const app = express();

app.set("view engine", "pug"); // 뷰엔진설정
app.set("views", "./views"); // 뷰엔진 디렉터리설정

app.use("/", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extenede: false }));


app.get("/", (req, res) => {

    res.render("./index.pug");
})


module.exports = app;