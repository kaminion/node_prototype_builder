const path = require("path");
const express = require("express");
const { methodOverride } = require(path.join(__dirname, "./config/serverconf.js"));
const app = express();

app.set("view engine", "pug"); // 뷰엔진설정
app.set("views", "./views"); // 뷰엔진 디렉터리설정

// 필터
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extenede: false }));

// REST 설정에 필수
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}));

const adminRouter = require(path.join(__dirname, "./controller/adm/admin-router"));
// 라우팅
app.use("/adm", adminRouter);


app.get("/", (req, res) => {
    res.render("./index.pug");
});


module.exports = app;