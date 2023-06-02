import {NextFunction, Request, Response} from "express";


export const authorize = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers.authorization === "Basic YWRtaW46cXdlcnR5"){
        next()
    } else {
        res.status(401)
    }
}