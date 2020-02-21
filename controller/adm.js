const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    res.render("./adm/group/group.pug");
});



module.exports = router;