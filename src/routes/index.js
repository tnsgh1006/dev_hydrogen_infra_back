const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user");

router.use("/user", userControllers);

module.exports = router;
