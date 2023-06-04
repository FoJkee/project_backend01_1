import {Request, Response, Router} from "express";
import {blogs} from "../repositories/blogs-repositories";


export const testingRouter = Router()

testingRouter.delete('/all-data',  (req: Request, res: Response) => {

    if (blogs.length > 0){
        blogs.splice(0)
        res.status(204).json({errorsMessages: blogs})
    }
})