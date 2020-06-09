const express = require("express");
const router = express.Router();

const AuthHandlers = require("./../controller/AuthHandlers");
const AsyncHandle = require('./../helpers/handle-async-operation');

router.post("/signUp", AsyncHandle(AuthHandlers.signUp));
router.post("/signIn", AsyncHandle(AuthHandlers.signIn));

module.exports = router;
