import exp,{Router,Request,Response} from 'express'
import PostService from '../services/postService'



const router:Router = exp.Router()

router.get('/', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result = await PostService.getAllPost()
        res.json({
            err: false,
            message: 'Login Successful',  
            data:result 
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
router.post('/', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result =  await PostService.createNewPost(req.body)
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
router.get('/search', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result =  await PostService.getPostBySearch(req.query.word as string)
        res.json({
            err: false,
            message: 'Login Successful',  
            data:result 
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
        const result =  await PostService.getPostBySearchById(req.params.id)
        res.json({
            err: false,
            message: 'Login Successful',  
            data:result 
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
router.patch('/like/:idpost/:iduser', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result = await PostService.PostLike(req.params.idpost,req.params.iduser)
        res.json({
            err: false,
            message: 'Login Successful',  
            data:result 
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