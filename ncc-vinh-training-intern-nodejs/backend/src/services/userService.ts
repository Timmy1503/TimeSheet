import { IService } from "../interfaces/serviceInterface";
import {Request, Response, NextFunction} from 'express';
import userRepository from "../repositories/userRepository";
import { UserDTO } from "../dto/reqdto/userDto";
import { CreateUserResDTO } from "../dto/resdto/createUserResDto";
import { GetUserResDTO } from "../dto/resdto/getUserResDto";
import get from "../util/get";
import { IResponse } from "../interfaces/responseInterface";

class UserService implements IService{
    private _userRepository = userRepository;
    default = (req: Request, res: Response, next: NextFunction) => {};

    createUser = async (req: Request, res: Response, next: NextFunction) =>{
        let user: UserDTO = req.body;
        let response : CreateUserResDTO ={
            result: null,
            targetUrl: null,
            success: false,
            error: null,
            unAuthRequest: false,
            __abp: true
        }
        
        try {
            if(!user.userName || !user.emailAddress || !user.password){
                return res.status(500).json(response);
            }

            let newUser = await this._userRepository.createUser(user);
            newUser = get(newUser, 
                ['userName', 'name', 
                'surname', 'emailAddress', 
                'phoneNumber', 'address', 
                'isActive', 'fullName', 
                'roleNames', 'type', 'salary', 
                'salaryAt', 'startDateAt', 
                'allowedLeaveDay', 'userCode', 
                'jobTitle', 'level', 
                'registerWorkDay', 'managerId', 
                'branch', 'sex', 
                'avatarPath', 'morningWorking', 
                'morningStartAt', 'morningEndAt', 
                'afternoonWorking', 'afternoonStartAt', 
                'afternoonEndAt', 'isWorkingTimeDefault', 
                'isStopWork', 'id']);
            
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    };

    update = async  (req: Request, res: Response, next: NextFunction) =>{
        let user: UserDTO = req.body;
        let response : GetUserResDTO = {
            result: null,
            targetUrl: null,
            success: false,
            error: null,
            unAuthRequest: false,
            __abp: true
        }
        try {
            if(await this._userRepository.findById(user.id)){
                let updateUser = await this._userRepository.update(user);
                updateUser = get(updateUser,
                    ['userName', 'name', 
                    'surname', 'emailAddress', 
                    'phoneNumber', 'address', 
                    'isActive', 'fullName', 
                    'roleNames', 'type', 'salary', 
                    'salaryAt', 'startDateAt', 
                    'allowedLeaveDay', 'userCode', 
                    'jobTitle', 'level', 
                    'registerWorkDay', 'managerId', 
                    'branch', 'sex', 
                    'avatarPath', 'morningWorking', 
                    'morningStartAt', 'morningEndAt', 
                    'afternoonWorking', 'afternoonStartAt', 
                    'afternoonEndAt', 'isWorkingTimeDefault', 
                    'isStopWork', 'id']);
                    
                res.status(200).json(response);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    delete = async (req: Request, res: Response, next: NextFunction) =>{
        const deleteUser = req.query.id;

        let response: IResponse = {
            result: null,
            targetUrl: null,
            success: false,
            error: null,
            unAuthRequest: false,
            __abp: true
        }
    }
}
export = new UserService();