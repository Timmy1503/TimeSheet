import {model, Model, Schema, Types} from 'mongoose';
import { Branch, Level, Sex, UserType } from '../constant/userType';
import { IUser } from '../interfaces/userInterface';

export const UserSchema: Schema = new Schema(
    {
        _id: Types.ObjectId,
        id: {type: Number, require: true, unique: true},
        userName: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        surname: {type: String, require: true},
        fullName: {type: String, require: true},
        emailAddress: { type: String, require: true, unique: true },
        phoneNumber: { type: String },
        address: { type: String },
        isActive: { type: Boolean },
        roleNames:[String],
        type: {type: UserType},
        jobTitle: {type: String},
        level: {type: Level},
        registerWorkDay: { type: String },
        allowedLeaveDay: { type: String },
        startDateAt: { type: String },
        salary: { type: Number },
        salaryAt: { type: String },
        userCode: { type: String },
        managerId: { type: Number },
        branch: {type: Branch},
        sex: {type: Sex},
        morningWorking: { type: String },
        morningStartAt: { type: String },
        morningEndAt: { type: String },
        afternoonWorking: { type: String },
        afternoonStartAt: { type: String },
        afternoonEndAt: { type: String },
        isWorkingTimeDefault: { type: Boolean },
        avatarPath: { type: String }
    },
    {
        timestamps: true
    }
);

export interface IUserModel extends Model<IUser>{};

export const User: IUserModel = model<IUser, IUserModel>('User', UserSchema, 'users');