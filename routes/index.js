const router = require("express").Router();
const Pledge = require("./pledge");

router.use("/pledges", Pledge);

module.exports = router;
