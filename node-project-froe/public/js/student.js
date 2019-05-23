var Student = {
/**
 * 需要用到的数据
 * 
 */
  data:{
    list: [],
  },
  /**
   * 查询学生
   */
  findStudent: function () {
    $.get('http://localhost:3000/api/stu', function (res) {
      if (res.code === 0){
        Student.data.list = res.data.list;

        let html = ejs.render(
          $('#a').html(),
          {
            list: Student.data.list
          }
        )

        $('#myTable tbody').html(html);
      }else{
        alert('网络异常，请稍后重试！')
      }
    })
  }
}




$(function () {
  // 请求
  Student.findStudent();
})