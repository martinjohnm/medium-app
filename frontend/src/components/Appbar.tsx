import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"




export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-6">
        <Link to={"/blogs"} className="flex flex-col justify-center cursor-pointer">
                Medium
        </Link>
        <div className="mr-6">
            <Link to={"/publish"} className="mr-8">
                <button type="button" className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            </Link>
            <Avatar name="Hkirat" size={8}/>
        </div>
    </div>
}