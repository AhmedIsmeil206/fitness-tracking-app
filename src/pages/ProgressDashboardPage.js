import React from 'react';
import ProgressDashboard from '../components/ProgressDashboard';

const ProgressDashboardPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Workout Progress</h1>
            <ProgressDashboard />
        </div>
    );
};

export default ProgressDashboardPage;
