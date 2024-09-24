
import exp,{Router,Request,Response} from 'express'


const router:Router = exp.Router()


router.post('/register', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
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
    catch(arr){
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
    catch(arr){
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
    catch(arr){
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
    catch(arr){
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
    catch(arr){
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
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})


export default router