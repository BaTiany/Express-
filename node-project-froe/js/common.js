//1.判断用户是否登录，如果登录才可以显示要去的页面，否则跳转回登录页面

let userInfo = localStorage.getItem('userInfo')
userInfo = userInfo ? JSON.parse(userInfo) : null; 

if (!userInfo) {
  // 回登录页面
  location.href = '/login.html';
} else {
  // 不处理
  $('.nickname').html(userInfo.username);
  $('.avator').attr('src', userInfo.avatar);
}