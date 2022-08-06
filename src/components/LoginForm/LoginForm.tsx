import React, {useState} from "react";
import {Field, ErrorMessage, Formik} from "formik";
import {validationSchemeLog} from "../../utils/validation";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

export default function LoginForm() {
    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState("")

    const navigate = useNavigate()
    const { signIn } = useAuth()

    interface FormLogValues {
        email: string,
        password: string
    }
    const initialValues: FormLogValues = {
        email: "",
        password: ""
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemeLog}
                validateOnBlur
                onSubmit={async (values) => {
                    try {
                        setErrors("")
                        setLoading(true)
                        console.log(values)
                        await signIn(values.email, values.password)
                        navigate("/user", {replace: true})
                    } catch (e) {
                        setErrors("An error occurred")
                        setLoading(false)
                    }
                    setLoading(false)
                }}
            >
                {(
                    {
                        handleSubmit
                    }
                ) => (
                    <form onSubmit={handleSubmit} className={"text-black p-4 md:p-8"}>
                        <h1 className="text-orange-500 text-3xl mb-6">Log in into an Existing Account</h1>
                        <label htmlFor={"email"} className={"text-white"}>Email</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder={"Enter your email"}
                            className={"w-full p-2 rounded-md my-1"}
                        />
                        <ErrorMessage className={"text-red-700"} name="email" component="div" />
                        <label htmlFor={"password"} className={"text-white"}>Password</label>
                        <Field
                            type="password"
                            name="password"
                            placeholder={"Enter your password"}
                            className={"w-full p-2 rounded-md my-1"}
                        />
                        <ErrorMessage className={"text-red-700"} name="password" component="div" />
                        <button
                            className="w-full p-2 rounded-md mt-4 border-2 border-white text-white hover:bg-orange-500"
                            type="submit"
                            disabled={isLoading}
                        >
                            Log In
                        </button>
                        {errors && <p className={"text-red-700 text-center mt-2"}>{errors}</p>}
                        <div className={"text-center text-white mt-4"}>
                            Do not have an account yet? <Link className={"text-orange-500"} to={"/register"} >Sign Up</Link> Instead
                        </div>
                    </form>
                )
                }
            </Formik>
        </>
    )
}