const express = require('express')
const router = require('./router/user')
const type =require('./router/type/user_type')


require('./database/init')
require('./database/models/car_user')
require('./database/models/car_type')
require('./database/models/car_type1')


const app = express()
var cors = require('cors');

app.use(cors());
app.use('/api', router);
app.use('/api',type)


app.listen(4000,()=>{
    console.log('serve 4000')
})
