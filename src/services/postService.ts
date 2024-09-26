
import fs from "fs/promises"
import Post from "../models/post";
import { getFileData, saveFileData } from "../config/filedatalayer";
import NewPostDTO from "../DTO/newPost";

export default class PostService{
    public static async createNewPost(newpost: NewPostDTO): Promise<boolean> {
        //create new user 
        const post: Post = new Post(newpost.authorId, newpost.content, newpost.hashtags, newpost.ref);
        let posters: Post[] = await getFileData<Post>("posters") as Post[];
        if(!posters) posters = [];
        // push
        posters.push(post);
        // write to file
        return await saveFileData<Post>("posters", posters);
    }

    public static async getAllPost(): Promise<Post[]> {     
        
        let posters: Post[] = await getFileData<Post>("posters") as Post[];
        if(!posters) posters = [];      
        
        return posters
    }
    public static async getPostBySearch(wors:string): Promise<Post[]> {    
        console.log(wors) 
        
        let posters: Post[] = await getFileData<Post>("posters") as Post[];
        const filteredPosts = posters.filter(post => post.content.includes(wors));         
        return filteredPosts
    }
    public static async getPostBySearchById(id:string): Promise<Post|undefined >  {         
        
        let posters: Post[] = await getFileData<Post>("posters") as Post[];
        const filteredPosts = posters.find(post => post.id == id);         
        return filteredPosts
    }
    public static async PostLike(idpost:string,iduser:string): Promise<boolean>  {         
        
        let posters: Post[] = await getFileData<Post>("posters") as Post[];
        const index  = posters.findIndex(post => post.id == idpost);  
        if(index > -1) {
            if(!posters[index].likesBy.includes(iduser)) {
                posters[index].likesBy.push(iduser);       
                return await saveFileData<Post>("posters", posters);
            }        
        }
    return false
    }
}