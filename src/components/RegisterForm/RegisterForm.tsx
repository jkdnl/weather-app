import React from "react";
import {Field, ErrorMessage, Formik} from "formik";
import {validationSchemeReg} from "../../utils/validation";
import {Link} from "react-router-dom";

export default function RegisterForm() {

    interface FormRegValues {
        username: string,
        email: string,
        password: string,
    }
    const initialValues: FormRegValues = {
        username: "",
        email: "",
        password: ""
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemeReg}
                validateOnBlur
                onSubmit={values => console.log(values)}
            >
                {(
                    {
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isValid,
                        handleSubmit,
                        dirty
                    }
                ) => (
                    <form onSubmit={handleSubmit} className={"text-black p-4 md:p-8"}>
                        <h1 className="text-orange-500 text-3xl mb-6">Create an Account</h1>
                        <label htmlFor={"username"} className={"text-white"}>Username</label>
                        <Field
                            type="text"
                            name="username"
                            placeholder={"Enter your username"}
                            className={"w-full p-2 rounded-md my-1"}
                        />
                        <ErrorMessage className={"text-red-700"} name="username" component="div" />
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
                            type="submit">
                            Sign Up
                        </button>
                        <div className={"text-center text-white mt-4"}>
                            Already have an account? <Link className={"text-orange-500"} to={"/login"} >Log In</Link> Instead
                        </div>
                    </form>
                )
                }
            </Formik>
        </>
    )
}