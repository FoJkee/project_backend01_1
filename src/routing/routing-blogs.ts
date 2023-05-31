import {Request, Response, Router} from "express";
import {blogsType, Error} from "../types/types";


const date = +(new Date())

export const blogs: blogsType[] = []

const errors: Error[] = []

export const routingBlogs = Router()
routingBlogs.get('/', (req: Request, res: Response) => {
    res.status(200).send(blogs)
})
routingBlogs.post('/', (req: Request, res: Response) => {

//Unauthorized????

    const {id, name, description, websiteUrl} = req.body

    if (!(typeof (id) === "string") || !(typeof (name) === "string")
        || !(typeof (description) === "string")
        || !(typeof (websiteUrl) === "string")) {

        errors.push({
            message: "string",
            field: "string"
        })
    }
    if (errors.length > 0) {
        res.status(400).send({errorsMessages: errors})
        return
    } else {
        const blogsPost: blogsType = {
            id: date.toString(),
            name: name,
            description: description,
            websiteUrl: websiteUrl
        }

        blogs.push(blogsPost)
        res.status(201).json(blogsPost)
    }
})
routingBlogs.get('/:id', (req: Request, res: Response) => {
})
routingBlogs.put('/', (req: Request, res: Response) => {
})
routingBlogs.delete('/:id', (req: Request, res: Response) => {
})