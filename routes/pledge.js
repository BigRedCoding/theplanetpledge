const router = require("express").Router();

const { createPledge, getPledges } = require("../controllers/pledge.js");

router.post("/", createPledge);
router.get("/", getPledges);

module.exports = router;
