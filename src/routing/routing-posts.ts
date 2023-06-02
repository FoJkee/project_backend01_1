import {Request, Response, Router} from "express";
import {repositoryPosts} from "../repositories/posts-repositories";
import {authorize} from "../middleware/authorize";

export const routingPosts = Router()


routingPosts.get('/', (req: Request, res: Response) => {

    const postsGet = repositoryPosts.findPosts()
    res.status(200).json(postsGet)

})
routingPosts.post('/',authorize, (req: Request, res: Response) => {

    const newPosts = repositoryPosts.createPosts(req.body.title,
        req.body.shortDescription, req.body.content, req.body.blogId,
        req.body.blogName)
    res.status(201).json(newPosts)

})
routingPosts.get('/:id', (req: Request, res: Response) => {

    const postsGetId = repositoryPosts.findPostsId(req.params.id)
    postsGetId ? res.status(200).json(postsGetId) : res.status(404)

})
routingPosts.put('/:id',authorize, (req: Request, res: Response) => {
const putBlogs = repositoryPosts.updatePosts(req.params.id, req.body.title,
    req.body.shortDescription, req.body.content, req.body.blogId)
if(putBlogs) {
   const putBlogsId =  repositoryPosts.findPostsId(req.params.id)
    res.status(204).send(putBlogsId)
} else {
    res.status(404)
}

})
routingPosts.delete('/:id',authorize, (req: Request, res: Response) => {

    const postDelete = repositoryPosts.deletePosts(req.params.id)
    postDelete ? res.status(204) : res.status(404)

})