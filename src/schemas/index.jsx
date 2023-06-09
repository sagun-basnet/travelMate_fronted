import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3, 'too Short!').required("Please enter your name"),
    phone: Yup.string().min(10).required("Please enter your Phone number"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
})