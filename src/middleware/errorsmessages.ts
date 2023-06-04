import {Response, Request, NextFunction} from "express";
import {ValidationError, validationResult} from "express-validator";


export const errorsMessages = (req: Request, res: Response, next: NextFunction) => {

    // @ts-ignore
    const errMes = ({msg, path} : ValidationError) => {
        return {
            message: msg,
            field: path
        }
    }

    const result = validationResult(req).formatWith(errMes).array({onlyFirstError: true})
    if (result) {
        res.status(400).json({errorsMessages: result});
    } else {
        next()
    }


}


