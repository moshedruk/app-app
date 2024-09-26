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
    public static async PostFollwo(idme:string,iduser:string): Promise<boolean>  {         
        let users: User[] = await getFileData<User>("users") as User[];
        const indexMe  = users.findIndex(user => user.id == idme);  
        const indexUser  = users.findIndex(user => user.id == iduser);
        if(indexMe  > -1 && indexUser > -1) {
            if(!users[indexMe].following.includes(iduser)) {
                users[indexMe].following.push(iduser); 
                users[indexUser].followers.push(idme); 
                return await saveFileData<User>("users", users);
            }        
        }
    return false
    }
    public static async getUserBySearch(word:string): Promise<User[]> {           
        let users: User[] = await getFileData<User>("users") as User[];
        const filtereduser = users.filter(User => User.userName.includes(word));         
        return filtereduser
    }
    public static async getUserById(idUser:string): Promise<User | undefined> {           
        let users: User[] = await getFileData<User>("users") as User[];
        const filtereduser = users.find(User => User.id ==idUser);         
        return filtereduser
    }
}