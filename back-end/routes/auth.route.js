const express = require("express");
const router = express.Router();

const AuthHandlers = require("./../controller/AuthHandlers");

router.post("/signUp", AuthHandlers.signUp);
router.post("/signIn", AuthHandlers.signIn);

module.exports = router;
