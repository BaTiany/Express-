$(function(){
  $('.lv-login-body__btn').click(function(){

    $.post('http://localhost:3000/api/login',{
      username: $('input[name="username"]').val(),
      password: $('input[name="password"]').val()
    },function(res){
      if(res.code === 0){
        //存储登录状态
        localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));

        // //存储起来token
        // localStorage.setItem('token', res.data.token);
        
        location.href = '/index.html';
      }else{
        alert(res.msg);
      }
    })
  })
})