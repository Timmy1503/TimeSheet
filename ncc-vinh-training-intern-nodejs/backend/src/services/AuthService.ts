import { NextFunction, Request, Response } from "express";
import { AuthenticateReqDto } from "../dto/reqdto/authenticateReqDto";
import { AuthenticateResDto } from "../dto/resdto/authenticateResponseDto";
import { IService } from "../interfaces/serviceInterface";
// import IUser from "../interfaces/userInterface";
import userRepository from "../repositories/userRepository";
import bcryptjs from 'bcryptjs';
import signJWT from '../functions/signJWT';
import {User} from '../models/userModel';

class AuthService  implements IService{
    private userRepository = userRepository;

    default = (req: Request, res: Response, next: NextFunction) => {};
    authenticate = async(req: Request, res: Response, next: NextFunction) =>{
        
        let response : AuthenticateResDto = {
            result: null,
            targetUrl: null,
            success: false,
            error: null,
            unAuthRequest: false,
            __abp: true
        }

        res.json(response);
    }
    
    
    login = (req: Request, res: Response, next: NextFunction) => {
        let { userNameOrEmailAddress, password } = req.body;
        let response: AuthenticateResDto = {
            result: null,
            targetUrl: null,
            success: false,
            error: null,
            unAuthRequest: false,
            __abp: true
        }
    
        User.find({ userName: userNameOrEmailAddress })
            .exec()
            .then((users) => {
                if (users.length !== 1) {
                    response.error = "401"
                    return res.json(response);
                }
    
                bcryptjs.compare(password, users[0].password, (error, result) => {
                    if (error) {
                        response.error = "password incorrect";
                        return res.json(response)
                    } else if (result) {
                        signJWT(users[0], (_error, token, expirationTimeInSeconds) => {
                            if (_error) {
                                return res.status(500).json({
                                    message: _error.message,
                                    error: _error
                                });
                            } else if (token) {
                                response.success = true;
                                response.result = {
                                    accessToken: token,
                                    userId: users[0].id,
                                    expireInSeconds: expirationTimeInSeconds,
                                    encryptedAccessToken: token
                                }
                                return res.status(200).json(response);
                                
                                // return res.status(200).json(data);
                            }
                        });
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    };
}
export = new AuthService();