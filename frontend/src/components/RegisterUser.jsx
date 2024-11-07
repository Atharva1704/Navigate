import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterUser = () => {
    // Formik setup
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'First Name must be at least 2 characters')
                .max(50, 'First Name must be 50 characters or less')
                .required('First Name is required'),
            lastName: Yup.string()
                .min(2, 'Last Name must be at least 2 characters')
                .max(50, 'Last Name must be 50 characters or less')
                .required('Last Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .max(50, 'Email must be 50 characters or less')
                .required('Email is required'),
            password: Yup.string()
                .min(5, 'Password must be at least 5 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log(values);
                const response = await axios.post('http://localhost:3001/auth/register', values);
                console.log('User registered:', response.data);
                resetForm();
            } catch (error) {
                console.error('Error registering user:', error.response?.data || error.message);
            }
        },
    });

    return (
        <div>
            <h1>Register User</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterUser;
