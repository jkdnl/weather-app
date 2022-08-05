import * as yup from "yup";

const validationSchemeLog = yup.object().shape({
    email: yup.string().email("Email is incorrect").required("Email is required"),
    password: yup.string().required("Password is required"),
})
const validationSchemeReg = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().email("Email is incorrect").required("Email is required"),
    password: yup.string().required("Password is required"),
})

export {validationSchemeLog, validationSchemeReg}