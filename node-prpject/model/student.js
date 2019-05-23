//引入db
const db = require('../config/db');


//2.创建 schema
  const schema = new db.Schema({
    name: {
      type: String,
      required: true
    },
  
    sex: {
      type: Number,
      default: 0
    },
  
    age: {
      type: Number,
      default: 18
    },
  
    isHun: {
      type: Number,
      default: 0
    },
  
    phone: Number
  })

  //3.暴露根据schema 创建出的 model
  module.exports = db.model('student',schema);