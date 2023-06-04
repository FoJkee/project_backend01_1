import {NextFunction, Request, Response} from "express";

export const authorizeMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const code = Buffer.from('admin:qwerty').toString('base64')

    if (req.headers.authorization !== `Basic ${code}`) res.status(401)

    next()

}