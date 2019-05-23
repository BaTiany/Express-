# 学生管理系统接口文档

以下接口的 baseURL 为 http://localhost:3000

## 1、注册

- 请求地址：`/api/reg`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |
| sex | Number | N | 性别 |
| nickname | String | N | 用户昵称 |
| avatar | String | N | 用户头像 |
| admin | Number | N | 是否是管理员 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```

## 2、登录

- 请求地址：`/api/login`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| username | String | Y | 用户名 |
| password | String | Y | 密码 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```

## 3、新增学生

- 请求地址：`/api/stu`
- 请求方式：`POST`
- 请求参数：`body`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| name | String | Y | 学生名字 |
| sex | Number | N | 学生性别 |
| age | Number | N | 学生年龄 |
| isHun | Number | N | 是否已婚 |
| phone | Number | N | 手机号码 |

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok'
}
```

## 4、查询学生 (分页 - 模糊搜索)

- 请求地址：`/api/stu`
- 请求方式：`GET`
- 请求参数：`query`

| 参数名字 | 参数类型 | 是否必须 | 说明 |
| --- | --- |--- | --- |
| pageNum | Number | N | 请求的页数 |
| pageSize | Number | N | 每页显示的条数 |
| name | String | N | 查询的学生名字 | 

- 返回：
```js
{
  code: 0,  // 0 代表成功，-1 代表失败
  msg: 'ok',
  data: {
    totalPage: 10, // 总共的页数
    list: [{name: '', age: 18}], // 当前页数学生集合
  }
}
```