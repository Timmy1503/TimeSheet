import {Document} from 'mongoose';
import { Branch, Level, Sex, UserType } from '../constant/userType';
import { IBase } from './baseInterface';

export interface IUser extends IBase, Document{
    id: number;
    userName: string;
    password: string;
    name: string;
    surname: string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    isActive: boolean;
    isStopWork: boolean;
    roleNames: string[];
    type: UserType;
    jobTitle: string;
    level: Level;
    allowedLeaveDay: number;
    startDateAt: string;
    salary: number;
    salaryAt: string;
    userCode: string;
    managerId: number;
    branch: Branch;
    sex: Sex;
    morningWorking: string;
    morningStartAt: string;
    morningEndAt: string;
    afternoonWorking: string;
    afternoonStartAt: string;
    afternoonEndAt: string;
    isWorkingTimeDefault: boolean;
    registerWorkDay: string;
    avatarPath: string;
}