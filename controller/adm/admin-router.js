const express = require("express");
const router = express.Router();
const path = require("path");

// 커맨드 라우터, 나중에 fs 시스템으로 재설계

const groupRouter = require(path.join(__dirname, "./group"));
router.use("/group", groupRouter);


module.exports = router;