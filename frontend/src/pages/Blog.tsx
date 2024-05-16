import { useParams } from "react-router-dom"
import { SingleBlog } from "../components/SingleBlog"
import {  BlogType, useBlog } from "../hooks"
import { SingleBlogSkeleton } from "../components/SingleBlogSkeleton";





export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id : id || ""
    })

    if (loading) {
        return <div>
            <SingleBlogSkeleton/>
        </div>
    }

    return <div>
        <SingleBlog blog={blog as BlogType}/>
    </div>
}