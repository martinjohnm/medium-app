import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"




export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    return <div>    
        <Appbar/>
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
               
                <textarea onChange={(e) => {
                    setTitle(e.target.value)
                }} 
                id="message" className="outline-none block p-2.5 w-full text-sm 
                             text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                             focus:border-blue-500" placeholder="Title"></textarea>
                <TextEditor onChange={(e) => {
                    setContent(e.target.value)
                }}/>
                <button
                onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers : {
                            Authorization : localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} 
                type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Publish post
                </button>
                    </div>
                </div>
    </div>
}


function TextEditor({onChange} : {onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return  <form className="mt-4">
       <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
           <div className="py-2 bg-white rounded-b-lg w-full">
               <textarea onChange={onChange} id="editor" rows={8} className="outline-none px-2 block w-full 
               text-sm text-gray-800 bg-white border-0" placeholder="Write your content here" required ></textarea>
           </div>
       </div>
       
    </form>
    
}