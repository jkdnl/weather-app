import React, {useEffect} from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export default function Login() {

    const {path} = useParams()
    const navigate = useNavigate()
    const {currentUser} = useAuth()

    useEffect(() => {
        if (path !== "login" && path !== "register") {
            navigate('/', {replace: true})
        }
        if (currentUser) {
            navigate('/', {replace: true})
        }
    }, [])
    return (
        <div className="w-[90%] md:w-9/12 lg:w-5/12 mx-auto mt-10 text-white border-2 border-orange-500 rounded-md shadow-md shadow-orange-500 backdrop-blur-sm">
            {path === "login" ? <LoginForm /> : path === "register" ? <RegisterForm /> : null}
        </div>
    )
}