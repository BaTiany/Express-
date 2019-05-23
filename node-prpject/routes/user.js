const UserCtrl = require('../controller/userCtrl');
const express = require('express');
const router = express.Router();

router.post('/reg', UserCtrl.reg);
router.post('/login', UserCtrl.login);

module.exports = router;
