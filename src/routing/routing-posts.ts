import {Request, Response, Router} from "express";
import {errors} from "./routing-blogs";
import {repositoryPosts} from "../repositories/posts-repositories";

export const routingPosts = Router()


routingPosts.get('/', (req: Request, res: Response) => {
    const postsGet = repositoryPosts.findPosts()
    res.status(200).json(postsGet)
})
routingPosts.post('/', (req: Request, res: Response) => {

    // const {id, title, shortDescription, content, blogId, blogName} = req.body
    //
    // if (!(typeof (id) === "string") || !(typeof (title) === "string") ||
    //     !(typeof (shortDescription) === "string") || !(typeof (content) === "string")
    //     || !(typeof (blogId) === "string") || !(typeof (blogName) === "string")) {
    //     errors.push({
    //         message: "string",
    //         field: "string"
    //     })
    // }
    // if (errors.length > 0) {
    //     res.status(400).json({errorsMessages: errors})
    //     return
    // }

    const newPosts = repositoryPosts.createPosts(req.body.title,
        req.body.shortDescription, req.body.content, req.body.blogId,
        req.body.blogName)
    res.status(201).json(newPosts)


})
routingPosts.get('/:id', (req: Request, res: Response) => {
    const postsGetId = repositoryPosts.findPostsId(req.params.id)
    postsGetId ? res.status(200).json(postsGetId) : res.status(404)
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