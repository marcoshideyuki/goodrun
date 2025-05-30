var express = require("express");
var router = express.Router();

router.get("/cadastro.html", function (req, res) {
    res.render("index");
});

module.exports = router;