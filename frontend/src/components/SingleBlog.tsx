import { BlogType } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"





export const SingleBlog = ({blog} : {blog : BlogType}) => {


    return <div>

        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-14 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                        Posted on 2nd Dec 2022
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>
                </div>

                <div className="col-span-4">
                    
                    <div className="text-slate-700 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size={4} name={blog.author.name || "Annonymous"}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Annonymous"}
                            </div>
                            
                            <div className="pt-4 text-slate-500">
                                Random catch phrase about the authors ability to grab the users attention
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    </div>
}