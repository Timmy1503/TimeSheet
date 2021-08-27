import { IResponse } from "../../interfaces/responseInterface";
import { IUser } from "../../interfaces/userInterface";

type User = Omit<IUser, 'password'>
export interface CreateUserResDTO extends IResponse{
    result: User
}