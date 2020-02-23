const express = require("express");
const router = express.Router();
const path = require("path");
const { Group } = require(path.join(__dirname, "../../models"));
//const groupService = require(path.join(__dirname, "../service/groupService"));

router.get("/", async (req, res) => {

    await Group.findAll({
        order:[["id"]],
        raw: true
    });

    res.render("adm/group/group.pug");
});

router.post("/", async (req, res) => {
    
    await Group.create({
        gr_title: req.body.group_title
    });

    res.redirect("/adm/group/");
});

router.put("/", (req, res)=> {
    res.send("a");
});





module.exports = router;