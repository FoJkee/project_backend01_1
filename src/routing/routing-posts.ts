import {Request, Response, Router} from "express";
import {postsType} from "../types/types";
import {date, errors} from "./routing-blogs";

export const routingPosts = Router()

const posts: postsType[] = []

routingPosts.get('/', (req: Request, res: Response) => {
    res.status(200).send(posts)
})
routingPosts.post('/', (req: Request, res: Response) => {


    const {id, title, shortDescription, content, blogId, blogName} = req.body

    if (!(typeof (id) === "string") || !(typeof (title) === "string") ||
        !(typeof (shortDescription) === "string") || !(typeof (content) === "string")
        || !(typeof (blogId) === "string") || !(typeof (blogName) === "string")) {
        errors.push({
            message: "string",
            field: "string"
        })
    }
    if (errors.length > 0) {
        res.status(400).json({errorsMessages: errors})
        return
    }
    const postsPost: postsType = {
        id: date.toString(),
        title: title,
        shortDescription: shortDescription,
        content: content,
        blogId: blogId,
        blogName: blogName,
    }
    posts.push(postsPost)
    res.status(201).json(postsPost)

})
routingPosts.get('/:id', (req: Request, res: Response) => {
    const postsGet = posts.find(el => el.id === req.params.id)
    if (!postsGet) {
        res.status(404)
        return
    }
    res.status(200).json(postsGet)
})
routingPosts.put('/:id', (req: Request, res: Response) => {
    const postsPut = posts.find(el => el.id === req.body.id)
    if (!postsPut) {
        res.status(404)
        return
    }
    const {id, title, shortDescription, content, blogId, blogName} = req.body

    if (!(typeof (id) === "string") || !(typeof (title) === "string") ||
        !(typeof (shortDescription) === "string") || !(typeof (content) === "string")
        || !(typeof (blogId) === "string") || !(typeof (blogName) === "string")) {
        errors.push({
            message: "string",
            field: "string"
        })
    }
    if (errors.length > 0) {
        res.status(400).json({errorsMessages: errors})
        return
    }

    postsPut.title = title
    postsPut.shortDescription = shortDescription
    postsPut.content = content
    postsPut.blogId = blogId
    res.status(204)

})
routingPosts.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.id) {
            posts.splice(i, 0)
            res.status(204)
        }
    }
    res.status(404)

})