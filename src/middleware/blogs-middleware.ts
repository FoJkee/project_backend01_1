import {body} from "express-validator";


export const blogsMiddleware = [
    body('name').isString().trim().bail().isLength({min: 1, max: 20}).withMessage('Incorrect name'),
    body('description').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect description'),
    body('websiteUrl').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect websiteUrl')
]