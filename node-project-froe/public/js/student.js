var Student = {
/**
 * 需要用到的数据
 * 
 */
  data:{
    list: [],// 当前学生集合
    totalPage:1,//总页数
    pageNum:1,//当前的页数
    pageSize:10,//每页显示的条数
  },
  /**
   * 查询学生
   */
  findStudent: function () {
    $.get('http://localhost:3000/api/stu',{
      pageNum:Student.data.pageNum,
      pageSize:Student.data.pageSize,
    },  function (res) {
      if (res.code === 0){
        Student.data.list = res.data.list;
        Student.data.totalPage = res.data.totalPage;

        let html = ejs.render(
          $('#a').html(),
          {
            list: Student.data.list
          }
        )

        let pageHtml = ejs.render(
          $('#b').html(),
          {
            num:Student.data.totalPage,
            pageNum: Student.data.pageNum
          }
        )
        $('#myTable tbody').html(html);
        $('#myPage').html(pageHtml);
      }else{
        alert('网络异常，请稍后重试！')
      }
    })
  },


/**
 * 
 * 事件绑定
 */
bind: function () {
  $('#myPage').on('click','li',function(){
    //需要告诉我点的是第几页
    let toPage = $(this).data('num'); //要去的页数
    //判断 toPage 与 pageNum 不相同才去请求数据
    if (toPage !== Student.data.pageNum) {
      // 将 Student.data.pageNum 设置 为 toPage
      Student.data.pageNum = toPage;
      // 请求数据
      Student.findStudent();
    }
  })
}

}




$(function () {
  // 请求
  Student.findStudent();
  //调用事件绑定
  Student.bind();
})