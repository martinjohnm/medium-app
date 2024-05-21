import {  SignupInput } from "@martinjohnm/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { SummaryApi } from "../common";

SummaryApi.signUp

export const Auth = () => {

    

    const navigate = useNavigate();
    const [postInputs, setpostInputs] =  useState<SignupInput>({
        name : "",
        username : "",
        password : ""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
           
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        } catch(e) {
            alert("Error while signing up", )
            // alert the user here that the request failed
        }
        
    }

    return <div  className="h-screen flex justify-center flex-col">

        <div className="flex justify-center">
            <div>            
                <div className="px-10 text-center">
                    <div className="font-extrabold text-3xl">
                        {"Create an account"}
                        
                    </div>
                    <div className="text-slate-400 text-center">
                        {"Already have an account? Login"}
                        
                        <Link className="pl-2 underline" to={"/signin"}>Here</Link>
                    </div>
                    
                </div>


                <div className="pt-4 min-w-96">
                    
                    <LabelledInput label="Name" placeholder="John DOe" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            name : e.target.value
                        })) 
                    }}/>
                    
                    <LabelledInput label="username" type="email" placeholder="john@gmail.com" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            username : e.target.value
                        })) 
                    }}/>
                    <LabelledInput label="password" type="password" placeholder="************" onChange={(e)=> {
                        setpostInputs(c => ({
                            ...c, 
                            password : e.target.value
                        })) 
                    }}/>
                    <button onClick={sendRequest} type="button" className="text-white w-full mt-8 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700">{"signup"}</button>

                </div>

            </div>
        </div>
    </div>
}


interface LabelledInputType {
    label : string;
    placeholder : string;
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;

}

function LabelledInput({label, placeholder, onChange, type} : LabelledInputType) {
    return <div>
                <label className="block mb-2 text-sm font-bold text-black pt-2">{label}</label>
                <input onChange={onChange} type={ type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder= {placeholder} required />
            </div>
}