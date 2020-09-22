const express = require('express')
const type = require('../../database/models/car_type')
const type1 = require('../../database/models/car_type1')
var bodyParser = require('body-parser')
const router = express.Router()
// 中间件
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

// 双向关联
type.hasMany(type1, {
    foreignKey: 'type_pid',
    as: 'u',
    sourceKey: 'type_pid'
});
type1.belongsTo(type, {
    foreignKey: 'type_pid',
    targetKey: 'type_pid',
})
// 列表查询
router.get('/type', async (req, res) => {
        const usertype = await type.findAll({
            // 联合查询
            attributes: ['type_id', 'type_Name'],
            include: [
                {
                    attributes: ['type_id1', 'type_Name1', 'type_path'],
                    model: type1,
                    as: 'u',
                }
            ],
            raw: false
        })
        if (usertype !== null) {
            res.status(200).send(
                {
                    data: usertype,
                    status: 200
                }
            )
        } else {
            return res.status(400).send({
                meat: {
                    status: 500,
                    msg: 'err'
                }
            })
        }
    }
)
module.exports = router
