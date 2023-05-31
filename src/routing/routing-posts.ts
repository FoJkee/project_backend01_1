import {Request, Response, Router} from "express";
import {routingBlogs} from "./routing-blogs";

export const routingPosts = Router()
routingPosts.get('/', (req: Request, res: Response) => {
})
routingPosts.post('/', (req: Request, res: Response) => {
})
routingPosts.get('/:id', (req: Request, res: Response) => {
})
routingPosts.put('/', (req: Request, res: Response) => {
})
routingPosts.delete('/:id', (req: Request, res: Response) => {
})