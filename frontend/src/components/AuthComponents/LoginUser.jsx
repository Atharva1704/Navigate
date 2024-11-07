import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setLogin } from '../../redux/slices/storeJwt/storeJwt.js'; // Adjust the import path as needed

const LoginUser = () => {
    // Initialize dispatch and navigate
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Formik setup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(5, 'Password must be at least 5 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post('http://localhost:3001/auth/login', values);

                // Assuming the response contains user data and token
                const { user, token } = response.data;

                // Save user info and token in Redux
                dispatch(setLogin({ user, token }));

                console.log('User logged in:', response.data);
                resetForm();

                // Route to /home after successful login
                navigate('/home');
            } catch (error) {
                console.error('Error logging in user:', error.response?.data || error.message);
            }
        },
    });

    return (
        <div>
            <h1>Login User</h1>
            <form onSubmit={formik.handleSubmit}>
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

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginUser;
