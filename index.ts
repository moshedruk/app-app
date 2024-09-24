import exp, {Express} from 'express'
import 'dotenv/config'

import postController from './src/controllers/postController.js'
import userController from './src/controllers/userController.js'
import aothController from './src/controllers/authController.js'

const app:Express = exp()

app.use('post',postController)
app.use('user',userController)
app.use('auth',aothController)









app.listen(process.env.PORT, ():void =>console.log(`server is listen... ${process.env.PORT}`))