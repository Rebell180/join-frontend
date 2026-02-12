import { IUserObject } from "../interfaces/IUserObject";

export class User {
    email: string = "";
    username: string = "";
    fullname: string = "";
    password: string = "";
    token: string = "";

    constructor(data?: IUserObject) {
        if(data) {
            this.email = data.email;
            this.username = data.username;
            this.fullname = data.fullname;
            this.password = data.password;
            this.token = data.token;
        }
    }
}