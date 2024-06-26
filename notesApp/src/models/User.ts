import { MinLength } from "../decorators/MinLength";
import { Required } from "../decorators/Required";
import { ValidateEmail } from "../decorators/ValidateEmail";




export class User {


    @MinLength(3)
    @Required
    name: string;

    @Required
    lastName: string;

    @ValidateEmail
    email: string;

    constructor(name: string, lastName: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
}