var Student = {
  /**
   * 查询学生
   */
  findStudent: function () {
    $.get('http://localhost:3000/api/stu', function (res) {
      console.log(res);
    })
  }
}




$(function () {
  // 请求
  Student.findStudent();
})