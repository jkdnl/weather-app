import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useParams} from "react-router-dom";

export default function Login() {
    const {path} = useParams()
    return (
        <div className="w-[90%] md:w-9/12 lg:w-5/12 mx-auto mt-10 text-white border-2 border-orange-500 rounded-md shadow-md shadow-orange-500">
            {path === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
    )
}