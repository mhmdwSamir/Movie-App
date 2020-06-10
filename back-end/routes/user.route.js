const express = require("express");
const router = express.Router();

const UserHandlers = require("./../controller/UserHandlers");
const AsyncHandle = require('./../helpers/handle-async-operation');

router.get("/find-user", AsyncHandle(UserHandlers.finUserByEmail));

module.exports = router;
