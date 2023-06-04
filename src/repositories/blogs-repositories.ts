import {blogsType} from "../types/types";
import {webcrypto} from "crypto";

export const blogs: blogsType[] = []
const date = new Date()

export const repositoryBlogs = {

    findBlogs() {
        return blogs
    },

    createBlogs(name: string, description: string, websiteUrl: string) {

        const blogsPost = {
            id: (+date).toString(),
            name: name,
            description: description,
            websiteUrl: websiteUrl
        }
        blogs.push(blogsPost)
        return blogsPost
    },

    findBlogsId(id: string) {
        let blogsGet = blogs.find(el => el.id === id)
        return blogsGet
    },

    updateBlogs(id: string, name: string, description: string, websiteUrl: string) {
        const blogsPut = blogs.find(el => el.id === id)
        if (blogsPut) {
            blogsPut.name = name
            blogsPut.description = description
            blogsPut.websiteUrl = websiteUrl
            return true
        } else {
            return false
        }
    },
    deleteBlogs(id: string) {

        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].id === id) {
                blogs.splice(i, 1)
                return true
            }
        }
        return false
    }

}

