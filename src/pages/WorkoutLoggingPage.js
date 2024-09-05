import React from 'react';
import WorkoutForm from '../components/WorkoutForm';

const WorkoutLoggingPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Log Your Workout</h1>
            <WorkoutForm />
        </div>
    );
};

export default WorkoutLoggingPage;
