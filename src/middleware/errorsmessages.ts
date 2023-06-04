import {Response, Request, NextFunction} from "express";
import {ValidationError, validationResult} from "express-validator";


export const errorsMessages = (req: Request, res: Response, next: NextFunction) => {

    const errMes = ({msg, type} : ValidationError) => {
        return {
            message: msg,
            field: type
        }
    }


    const result = validationResult(req).formatWith(errMes).array({onlyFirstError: true})
    if (result) {
        res.status(400).json({errorsMessages: result});
    } else {
        next()
    }


}


