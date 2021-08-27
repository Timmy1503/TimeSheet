import { Request, Response, NextFunction } from "express";

export interface IService{
    default(req: Request, res: Response, next: NextFunction);
}