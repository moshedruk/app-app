
import fs from "fs/promises"
import Post from "../models/post";
import { getFileData, saveFileData } from "../config/filedatalayer";
import NewPostDTO from "../DTO/newPost";

export default class PostService{
    public static async createNewPost(newpost: NewPostDTO): Promise<boolean> {
        //create new user 
        const post: Post = new Post(newpost.authorId, newpost.content, newpost.hashtags);
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
}