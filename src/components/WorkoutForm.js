import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const WorkoutForm = () => {
    const [loggedWorkout, setLoggedWorkout] = useState(null);

    const formik = useFormik({
        initialValues: {
            exercise: '',
            duration: '',
            calories: '',
        },
        validationSchema: Yup.object({
            exercise: Yup.string().required('Exercise type is required'),
            duration: Yup.number().required('Duration is required').positive().integer(),
            calories: Yup.number().required('Calories burned is required').positive().integer(),
        }),
        onSubmit: (values, { resetForm }) => {
            setLoggedWorkout(values);
            resetForm();
        },
    });

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="exercise" className="block text-gray-700 text-sm font-bold mb-2">Exercise Type</label>
                    <input
                        id="exercise"
                        name="exercise"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.exercise}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            formik.touched.exercise && formik.errors.exercise ? 'border-red-500' : ''
                        }`}
                    />
                    {formik.touched.exercise && formik.errors.exercise && (
                        <p className="text-red-500 text-xs italic">{formik.errors.exercise}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">Duration (minutes)</label>
                    <input
                        id="duration"
                        name="duration"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duration}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            formik.touched.duration && formik.errors.duration ? 'border-red-500' : ''
                        }`}
                    />
                    {formik.touched.duration && formik.errors.duration && (
                        <p className="text-red-500 text-xs italic">{formik.errors.duration}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="calories" className="block text-gray-700 text-sm font-bold mb-2">Calories Burned</label>
                    <input
                        id="calories"
                        name="calories"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.calories}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            formik.touched.calories && formik.errors.calories ? 'border-red-500' : ''
                        }`}
                    />
                    {formik.touched.calories && formik.errors.calories && (
                        <p className="text-red-500 text-xs italic">{formik.errors.calories}</p>
                    )}
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Log Workout
                </button>
            </form>

            {loggedWorkout && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
                    <h2 className="text-lg font-bold mb-2 text-blue-600">Workout Logged</h2>
                    <p><strong>Exercise:</strong> {loggedWorkout.exercise}</p>
                    <p><strong>Duration:</strong> {loggedWorkout.duration} minutes</p>
                    <p><strong>Calories Burned:</strong> {loggedWorkout.calories}</p>
                </div>
            )}
        </div>
    );
};

export default WorkoutForm;
