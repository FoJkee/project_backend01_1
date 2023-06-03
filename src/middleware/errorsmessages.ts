import {Response, Request, NextFunction} from "express";
import {validationResult} from "express-validator";


export const errorsMessages = (req: Request, res: Response, next: NextFunction) => {



    const result = validationResult(req)
    if (result) {
        res.status(400).json({errorsMessages: result.array()});
    } else {
        next()
    }


}


