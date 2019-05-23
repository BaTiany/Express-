const StudentModel = require('../model/student');

/**
 * 新增学生
 */
const add = (req, res) => {
  // 1. 拿出学生名字
  let name = req.body.name;

  // 2. 判断是否已经存在
  StudentModel.findOne({ name: name }).then(data => {
    if (data) {
      res.send({
        code: -1,
        msg: '学生已存在'
      })
    } else {
      let student = new StudentModel(req.body);

      student.save().then(() => {
        res.send({
          code: 0,
          msg: '新增成功'
        })
      }).catch(error => {
        res.send({
          code: -1,
          msg: '新增失败'
        })
      })
    }
  })
}

/**
 * 学生分页查询
 */
const find = (req, res) => {
  // 1. 得到前端参数
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;
  let name = req.query.name; // 模糊搜索的姓名


  // 1.1 获取数据总条数
  StudentModel.find({ name: new RegExp(name) }).count().then(num => {
    // 总的页数
    let totalPage = Math.ceil(num / pageSize);

    // 2. 获取
    StudentModel.find({ name: new RegExp(name) }).skip(pageSize * (pageNum - 1)).limit(pageSize).then(data => {
      res.send({
        code: 0,
        msg: 'ok',
        data: {
          list: data,
          totalPage
        }
      })
    }).catch(error => {
      console.log(error.message);
      res.send({
        code: -1,
        msg: 'err'
      })
    })
  })
}


// 3. 暴露

module.exports = {
  add,
  find
}