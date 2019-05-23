const bcrypt = require('bcrypt');
const UserModel = require('../model/user');

/**
 * 注册用户
 */
const reg = (req, res) =>{
    let body = Object.assign({},req.body,{
        password:bcrypt.hashSync(req.body.password,10)
    })

    //1.先对用户是否存在做一个判断
    UserModel.findOne({ username:req.body.username }).then(data => {
        if(data){
            //存在，已存在用户
            res.send({
                code:-1,
                msg:'用户名已注册'
            })
        }else{
            //注册
            let user = new UserModel(body);
            user.save()
            .then(() => {
                res.send({
                    code:0,
                    msg:'ok'
                })
            })
            .catch(err => {
                console.log(err.message);
                res.send({
                    code:-1,
                    msg:'err'
                })
            })
        }
    })
    
}

/**
 * 用户登录
 */
const login = (req, res) =>{
    // 得到用户名，去查询一下数据库，是否存在，如果存在说明可以下一步，
    // 否则直接用户名错误。
    let username = req.body.username;
    let password = req.body.password;
    UserModel.findOne({ username:username }).then(data => {
        //如果存在，data 会是找的那个对象
        //否则会是 null 
        if( !data ){
            res.send({
                code:-1,
                msg:'用户名错误'
            })
            return;
        }
        let pwd  = data.password; //数据库中存储的密码
        let isok = bcrypt.compareSync(password,pwd);
        if(isok){
            //登录成功
            res.send({
                code:0,
                msg:'登录成功'
            })
        }else{
            //密码不正确
            res.send({
                code:-1,
                msg:'密码错误'
            })
        }
    })
}

module.exports = {
    reg,
    login
}