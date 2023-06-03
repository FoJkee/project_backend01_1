import {body} from "express-validator";
import {repositoryBlogs} from "../repositories/blogs-repositories";


export const blogidMiddleware = body('blogId').custom((value) => {
const blogId = repositoryBlogs.findBlogs()
  return  blogId.find((id, index)  => value === blogId[index].id)
})