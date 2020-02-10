const express = require("express");
const router = express.Router();

const { getAll, getById } = require("./controller");

router.get("/", getAll);
router.get("/id/:id", getById);
router.get("/username/:username", require("./controller").getByUsername);
router.post("/", require("./controller").addData);

module.exports = router;
