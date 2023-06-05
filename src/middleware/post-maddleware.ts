import {body} from "express-validator";


export const postMaddleware = [

    body('title').exists().isString().isLength({min: 1, max: 30}).withMessage('String length is not more than 30 symbols'),
    body('shortDescription').exists().isString().trim().isLength({min: 1, max: 100}).withMessage('String length is not more than 100 symbols'),
    body('content').exists().isString().isLength({min: 1, max: 1000}).withMessage('Incorrect content'),
    body('blogId').exists().isString().trim().isLength({min: 1, max: 100}).withMessage('Incorrect blogId'),
    body('blogName').exists().isString().isLength({min: 1, max: 15}).withMessage('String length is not more than 15 symbols')

]