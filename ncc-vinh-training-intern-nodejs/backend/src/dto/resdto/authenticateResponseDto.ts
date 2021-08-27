import { IResponse } from "../../interfaces/responseInterface";

export interface AuthenticateResDto extends IResponse{
    result: {
        accessToken: string
        encryptedAccessToken: string
        expireInSeconds: number
        userId: number
      },
}