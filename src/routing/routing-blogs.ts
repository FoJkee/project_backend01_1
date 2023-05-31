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
    }

    const blogsPost: blogsType = {
        id: date.toString(),
        name: name,
        description: description,
        websiteUrl: websiteUrl
    }
    blogs.push(blogsPost)
    res.status(201).json(blogsPost)

})
routingBlogs.get('/:id', (req: Request, res: Response) => {
    const blogsGet = blogs.find(el => el.id === req.params.id)
    if (!blogsGet) {
        res.status(404)
        return
    }
    res.status(200).json(blogsGet)

})
routingBlogs.put('/:id', (req: Request, res: Response) => {
    //Unauthorized????

    const blogsPut = blogs.find(el => el.id === req.params.id)

    if (!blogsPut) {
        res.status(404)
        return;
    }

    const {name, description, websiteUrl} = req.body

    if (!(typeof (name) === "string")
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
    }
    blogsPut.name = name
    blogsPut.description = description
    blogsPut.websiteUrl = websiteUrl

    res.status(204)

})
routingBlogs.delete('/:id', (req: Request, res: Response) => {
    //Unauthorized????

    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id === req.params.id) {
            blogs.splice(i, 1)
            res.status(204)
        }
    }
    res.status(404)
})