import { Types } from "mongoose";
import { IUser } from "../interfaces/userInterface";
import { User, UserSchema } from "../models/userModel";
import { BaseRepository } from "./BaseRepository";

class UserRepository extends BaseRepository<IUser>{
    constructor(){
        super("User", UserSchema)
    }

    public async createUser(user : IUser){
        const newUser : IUser = new User(
            user
        );
        try {
            return await newUser.save();
        } catch (error) {
            console.log(error);
        }
    }

}
export = new UserRepository();