const {Router}= require('express');
const router = Router();
const authRoutes = require('./auth.routes.js')

//code here

router.use("/auth",authRoutes);
module.exports = router;