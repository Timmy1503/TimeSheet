import { Document } from "mongoose";

export interface IRole extends Document{
    id: number,
    name: string,
    displayName: string,
    description: string
}