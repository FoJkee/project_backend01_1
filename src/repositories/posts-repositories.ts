import {postsType} from "../types/types";
import {blogs} from "./blogs-repositories";


export const posts: postsType[] = []
const date = new Date()
export const repositoryPosts = {

    findPosts() {
        return posts
    },

    createPosts(title: string, shortDescription: string,
                content: string, blogId: string) {

        const postsPost = {
            id: (+date).toString(),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId
        }

        posts.push(postsPost)
        return postsPost

    },

    findPostsId(id: string) {
        if (id) {
            let findGetId = posts.find(el => el.id === id)
            return findGetId
        } else {
            return posts
        }
    },

    updatePosts (id: string, title: string, shortDescription: string,
                 content: string, blogId: string){

        const postsPut = posts.find(el => el.id === id)

        if (postsPut) {
            postsPut.title = title
            postsPut.shortDescription = shortDescription
            postsPut.content = content
            postsPut.blogId = blogId
            return true
        } else {
            return false
        }
    },

    deletePosts(id: string) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts.splice(i, 0)
                return true
            }
        }
        return false
    },
    deletePostsAll(){
        posts.splice(0)
    }

}

