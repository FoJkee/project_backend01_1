import {Request, Response, Router} from "express";
import {query} from "express-validator";
import {posts} from "../repositories/posts-repositories";
import {blogs} from "../repositories/blogs-repositories";


export const testingRouter = Router()

testingRouter.delete('/all-data', query('person').notEmpty(), (req: Request, res: Response) => {
    posts.splice(0)

    if (posts.length > 0) {
        res.status(204).json([])
        return
    }

    blogs.splice(0)
    if (blogs.length > 0) {
        res.status(204).json([])
        return;
    }
})