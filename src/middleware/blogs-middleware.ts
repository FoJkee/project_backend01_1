import {body} from "express-validator";

const pattern = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

export const blogsMiddleware = [
    body('name').exists().bail().isString().trim().isLength({min: 1, max: 15}).bail().withMessage('String length is not more than 15 symbols'),
    body('description').exists().bail().isString().trim().isLength({min: 1, max: 500}).bail().withMessage('String length is not more than 500 symbols'),
    body('websiteUrl').exists().bail().isString().isLength({min: 1, max: 100}).bail().withMessage('String length is not more than 100 symbols')
]