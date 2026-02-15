import { IUserObject } from "../interfaces/IUserObject";

export class User {
    token: string = "";
    fullname: string = "";
    email: string = "";
    user_id: string = "";
    password: string = "";
    repeated_password: string = "";

    constructor(data?: IUserObject) {
        if(data) {
            this.token = data.token;
            this.fullname = data.fullname;
            this.email = data.email;
            this.user_id = data.user_id;
            this.password = data.password;
            this.repeated_password = data.repeated_password;
        }
    }
}