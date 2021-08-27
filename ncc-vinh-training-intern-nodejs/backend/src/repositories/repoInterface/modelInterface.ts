import { IBase } from "../../interfaces/baseInterface";

export interface IModel <T extends IBase>{
    lastId() : Promise<T[]>;
    findAll(item: T):Promise<T[]>;
    findByName(name: string): Promise<T>;
    findById(id: number):Promise<T>;
}