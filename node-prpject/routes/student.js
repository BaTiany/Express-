const express = require('express');
const StudentCtrl = require('../controller/studentCtrl');
const router = express.Router();

router.route('/stu')
  .post(StudentCtrl.add)
  .get(StudentCtrl.find)

module.exports = router;