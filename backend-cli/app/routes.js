const expres=require('express')
const router=express.Router()
const UserController=require('./controllers/UserController')


router.get('/users',UserController.all)

module.exports=router