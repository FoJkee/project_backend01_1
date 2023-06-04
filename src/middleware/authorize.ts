import {NextFunction, Request, Response} from "express";

export const authorize = (req: Request, res: Response, next: NextFunction) => {

    const code = Buffer.from('admin:qwerty').toString('base64')

    if (req.headers.authorization === `Basic ${code}`) {
        next()
    } else {
        res.status(401)
    }

}