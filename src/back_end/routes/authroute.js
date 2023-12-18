const { Router } = require("express");
const router = Router(); 
const { Signup,Login } = require("../controller/user");

router.post("/signup", Signup);
router.post('/login', Login);

module.exports = router;
