import { Furniture } from "./furniture";
import { Role } from "./role.enum";

export class User {
    id: number;
    name: String;
    role: Role;
    furniture: Furniture[];
    password: String;
    firstname: String;
    lastname: String;
    email: String; 
}
