const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.send("어드민 페이지");
});



module.exports = router;