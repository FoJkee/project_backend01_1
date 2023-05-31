import {Request, Response, Router} from "express";

type blogs = {
   id: string,
   name: string,
    description: string,
    websiteUrl: string
}


const blogs: blogs[] = []
export const routingBlogs = Router()
routingBlogs.get('/', (req: Request, res: Response) => {
    res.status(200).send(blogs)
})
routingBlogs.post('/', (req: Request, res: Response) => {
})
routingBlogs.get('/:id', (req: Request, res: Response) => {
})
routingBlogs.put('/', (req: Request, res: Response) => {
})
routingBlogs.delete('/:id', (req: Request, res: Response) => {
})