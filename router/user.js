const express = require('express')
const User = require('../database/models/car_user')
var bodyParser = require('body-parser')
const router = express.Router()
// 中间件
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

// 登入功能
router.post('/user', async (req, res) => {
    const UserName = await User.findOne({
        raw:true
      })
    if(UserName.user_name !== req.body.user_name ){
        return res.status(400).send({
            msg:'用户名不存在',
            status:500
        })
    }
    else if (UserName.user_passwrod !== req.body.user_passwrod)
    {
        return res.status(400).send({
            msg:'密码错误',
            status:500
        })
    }
    else {
        //  删除对象里面的属性
        delete UserName.user_passwrod
         res.status(200).send({
            data:UserName,
             meta:{
                status:200,
                 message:'登入成功'
             }
         })
    }
})
module.exports = router
