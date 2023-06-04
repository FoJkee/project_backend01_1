import {Request, Response, Router} from "express";
import {blogs} from "../repositories/blogs-repositories";
import {posts} from "../repositories/posts-repositories";


export const testingRouter = Router()

testingRouter.delete('/all-data', (req: Request, res: Response) => {
        blogs.splice(0)
        posts.splice(0)
        res.status(204).json(blogs)
})