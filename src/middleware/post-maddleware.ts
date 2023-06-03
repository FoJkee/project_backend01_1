import {body} from "express-validator";


export const postMaddleware = [

    body('title').isString().trim().bail().isLength({min: 1, max: 20}).withMessage('Incorrect title'),
    body('shortDescription').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect shortDescription'),
    body('content').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect content'),
    body('blogId').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect blogId'),
    body('blogName').isString().trim().bail().isLength({min: 1, max: 100}).withMessage('Incorrect blogName')

]