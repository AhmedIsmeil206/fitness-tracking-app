import React from 'react';
import GoalsSetting from '../components/GoalsSetting';

const GoalsSettingPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Set Your Fitness Goals</h1>
            <GoalsSetting />
        </div>
    );
};

export default GoalsSettingPage;
