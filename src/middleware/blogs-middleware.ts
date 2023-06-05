import {body} from "express-validator";


export const blogsMiddleware = [
    body('name').exists().bail().isString().trim().isLength({min: 1, max: 15}).withMessage('String length is not more than 15 symbols'),
    body('description').exists().bail().isString().trim().isLength({min: 1, max: 500}).withMessage('String length is not more than 500 symbols'),
    body('websiteUrl').exists().isString().trim().isLength({min: 1, max: 100}).withMessage('String length is not more than 100 symbols')
]