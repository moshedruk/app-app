import {v4} from 'uuid'

class Post {
    public id: string;
    public createAt: Date;
    public likesBy: string[] = [];
    

    constructor(
        public authorId: string,
        public content:  string,
        public hashtags: string[],         
        public ref?:  string,
        
    )
        {
            this.id = v4()
            this.createAt = new Date()
        }
}

export default Post;









