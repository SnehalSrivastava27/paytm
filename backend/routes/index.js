// backend/user/index.js
const express = require('express');
const app=express();
app.use(express.json());
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;