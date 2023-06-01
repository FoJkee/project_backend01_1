import {postsType} from "../types/types";


const posts: postsType[] = []
const date = new Date()
export const repositoryPosts = {

    findPosts() {
        return posts
    },

    createPosts(title: string, shortDescription: string,
                content: string, blogId: string, blogName: string) {

        const postsPost = {
            id: (+date).toString(),
            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId,
            blogName: blogName,
        }

        posts.push(postsPost)
        return postsPost

    },

    findPostsId(id: string) {
        if(id) {
            let findGetId = posts.find(el => el.id === id)
            return findGetId
        } else {
            return posts
        }
    },








}

