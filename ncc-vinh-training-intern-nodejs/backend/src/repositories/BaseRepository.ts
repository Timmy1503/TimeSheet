import { Schema, model, Document, Types } from "mongoose";
import logging from "../config/logging";
import { IBase } from "../interfaces/baseInterface";
import { IMethod } from "./repoInterface/methodInterface";
import { IModel } from "./repoInterface/modelInterface";

type Doc<T> = Document & T;
export class BaseRepository <T extends IBase> {
  // defaultMethod() {
  //   return {
  //     text: `You've reached the ${this.constructor.name} default method`,
  //   };
  // }

  private model;
  constructor(modelName: string, schema: Schema){
    this.model = model<T>(modelName, schema);
  }


//   public async create(item: T): Promise<T>{
//     let newItem = new this.model({
//       _id: Types.ObjectId(),
//       item
//     })
//     try {
//       await newItem.save();
      
//     } catch (error) {
//       console.log(error);
//     }
//   }
public async update(item: T): Promise<T>{
  try {
    await this.model.updateOne({id: item.id}, item);
    return await this.findById(item.id);
  } catch (error) {
    
  }
}

 public async findById(id: number) : Promise<T> {
   try {
     return await this.model.findOne({id: id});
   } catch (error) {
     
   }
 }
}