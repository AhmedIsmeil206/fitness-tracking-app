import React, { useState } from 'react';

const GoalsSetting = () => {
    const [goal, setGoal] = useState('');

    const handleGoalChange = (e) => {
        setGoal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Goal set:', goal);
        // Handle goal setting logic
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <label htmlFor="goal" className="block text-lg font-medium mb-2">Set Your Fitness Goal</label>
            <input
                id="goal"
                type="text"
                value={goal}
                onChange={handleGoalChange}
                className="border rounded p-2 w-full mb-4"
            />
            <button type="submit" className="bg-green-500 text-white rounded p-2">
                Set Goal
            </button>
        </form>
    );
};

export default GoalsSetting;
