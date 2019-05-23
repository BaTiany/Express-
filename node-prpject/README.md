# 需要哪些模块

1. express
2. mongoose
3. ejs

# mongoose 操作

## 查询

  - find()

## 新增


## restFulApi

> 使用同一个url地址，根据不同的请求方式来做得不同的功能点，就是这个api的设计思想

- get  查询
- post 新建
- put | patch 更新
- delete 删除

## 接口文档


## 密码加密

1. md5
2. hash加密 + 加盐 + 加味精


### 使用 bcrypt 来实现密码的加密与加盐的操作

1. 下载安装  npm install bcrypt --save
2. 在用户注册的时候，使用 bcrypt 将 密码给加密加盐处理了，再存储到数据库。

    bcrypt.hash()
    bcrypt.compare()

