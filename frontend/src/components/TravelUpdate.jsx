import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TravelUpdate = () => {
    const { id } = useParams(); 

    const formik = useFormik({
        initialValues: {
            commuteName: '',
            commuteCode: '',
            departureDate: '',
            departureTime: '',
            arrivalDate: '',
            arrivalTime: '',
        },
        validationSchema: Yup.object({
            commuteName: Yup.string()
                .min(2, 'Commute Name must be at least 2 characters')
                .max(50, 'Commute Name must be 50 characters or less')
                .required('Commute Name is required'),
            commuteCode: Yup.string()
                .min(2, 'Commute Code must be at least 2 characters')
                .max(50, 'Commute Code must be 50 characters or less')
                .required('Commute Code is required'),
            departureDate: Yup.string()
                .required('Departure Date is required'),
            departureTime: Yup.string()
                .required('Departure Time is required'),
            arrivalDate: Yup.string()
                .required('Arrival Date is required'),
            arrivalTime: Yup.string()
                .required('Arrival Time is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log(values);
                const response = await axios.put(`http://localhost:3001/travel/updateTravel/${id}`, values);
                console.log('Travel updated:', response.data);
                resetForm();
            } catch (error) {
                console.error('Error updating travel:', error.response?.data || error.message);
            }
        },
    });

    // Fetch the existing data for the travel ID (this can be done using a useEffect and another axios GET request)

    return (
        <div>
            <h1>Update Travel</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="commuteName">Commute Name</label>
                    <input
                        id="commuteName"
                        name="commuteName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.commuteName}
                    />
                    {formik.touched.commuteName && formik.errors.commuteName ? (
                        <div>{formik.errors.commuteName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="commuteCode">Commute Code</label>
                    <input
                        id="commuteCode"
                        name="commuteCode"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.commuteCode}
                    />
                    {formik.touched.commuteCode && formik.errors.commuteCode ? (
                        <div>{formik.errors.commuteCode}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="departureDate">Departure Date</label>
                    <input
                        id="departureDate"
                        name="departureDate"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.departureDate}
                    />
                    {formik.touched.departureDate && formik.errors.departureDate ? (
                        <div>{formik.errors.departureDate}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="departureTime">Departure Time</label>
                    <input
                        id="departureTime"
                        name="departureTime"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.departureTime}
                    />
                    {formik.touched.departureTime && formik.errors.departureTime ? (
                        <div>{formik.errors.departureTime}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="arrivalDate">Arrival Date</label>
                    <input
                        id="arrivalDate"
                        name="arrivalDate"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.arrivalDate}
                    />
                    {formik.touched.arrivalDate && formik.errors.arrivalDate ? (
                        <div>{formik.errors.arrivalDate}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="arrivalTime">Arrival Time</label>
                    <input
                        id="arrivalTime"
                        name="arrivalTime"
                        type="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.arrivalTime}
                    />
                    {formik.touched.arrivalTime && formik.errors.arrivalTime ? (
                        <div>{formik.errors.arrivalTime}</div>
                    ) : null}
                </div>

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default TravelUpdate;
