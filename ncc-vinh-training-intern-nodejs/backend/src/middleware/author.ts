import { NextFunction, Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface";

export const author = (role: string) =>async(req: Request, res: Response, next: NextFunction) =>{
    let response: IResponse = {
        result: null, 
        targetUrl: null,
        success: false,
        error: "Error",
        unAuthRequest: true,
        __abp: true
    };
}