import {body} from "express-validator";
import {repositoryBlogs} from "../repositories/blogs-repositories";


export const blogidMiddleware = body('blogId').custom((value) => {
const blogId = repositoryBlogs.findBlogs()
  return  blogId.filter((id, index)  => value === blogId[index].id)
})