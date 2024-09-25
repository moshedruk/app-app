import NewUserDTO from "../DTO/newUser"
import fs from "fs/promises"
import User from "../models/user";
import { getFileData, saveFileData } from "../config/filedatalayer";

export default class UserService{
    public static async createNewUser(newuser: NewUserDTO): Promise<boolean> {
        //create new user 
        const user: User = new User(newuser.username, newuser.password, newuser.email, newuser.avatarUrl, newuser.Birthday);
        let users: User[] = await getFileData<User>("users") as User[];
        if(!users) users = [];
        // push
        users.push(user);
        // write to file
        return await saveFileData<User>("users", users);
    }
    public static async getAllUsers(): Promise<User[]> {     
        
        let users: User[] = await getFileData<User>("users") as User[];
        if(!users) users = [];      
        
        return users
    }
}