export interface AuthenticateReqDto{
    userNameOrEmailAddress: string;
    password: string,
    rememberClient: boolean
}