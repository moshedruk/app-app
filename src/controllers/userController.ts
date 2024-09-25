
import exp,{Router,Request,Response} from 'express'
import UserService from '../services/userService'
import NewUserDTO from '../DTO/newUser'


const router:Router = exp.Router()


router.post('/register', async (req:Request<any,any,NewUserDTO>,res:Response):Promise<void> =>{    
    try{
        const result =  await UserService.createNewUser(req.body)
        if(result){
        res.status(201).json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })}
        else{
            throw new Error("cant save user")
        }
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: err|| 'Invalid',
            data: null
        })
    } 
})
router.post('/follow', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
router.get('/search', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
router.get('/:id', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
router.get('/profile', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
router.get('/followers', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
router.get('/following', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})


export default router