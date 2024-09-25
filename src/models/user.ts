import {v4} from 'uuid'

class User {
    public id: string;
    public following: string[] = [];
    public followers: string[] = [];
    public islockedAccount: boolean = false;
    public token? : string;

    constructor(
        public userName:  string,
        public password:  string,
        public email:     string,
        public avatarUrl: string,
        public birthDate?: Date,
    )
        {
            this.id = v4()
        }
}

export default User;