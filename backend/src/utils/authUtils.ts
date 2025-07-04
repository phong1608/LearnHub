import jwt from 'jsonwebtoken'
import { IAuthPayload } from '../interfaces/auth.interface'
const secretKey = process.env.JWT_KEY
const createAuthToken  = async({username,id,userType}:IAuthPayload)=>{

    const token =await jwt.sign({username,id,userType},secretKey,{
        'algorithm':'HS256',
        'expiresIn':'7 days'
    })
    return token
}
export {createAuthToken}
