import exp,{Router,Request,Response} from 'express'





const router:Router = exp.Router()


router.post('/login', async (req:Request,res:Response):Promise<void> =>{
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