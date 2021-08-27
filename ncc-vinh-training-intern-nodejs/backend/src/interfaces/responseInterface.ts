export interface IResponse{
    result: object | string;
    targetUrl: string;
    success: boolean;
    error: string;
    unAuthRequest: boolean;
    __abp: boolean;
}