import React from 'react';

const ProgressDashboard = () => {
    // Sample data; replace with actual data fetching logic
    const workouts = [
        { id: 1, exercise: 'Running', duration: 30, calories: 300 },
        { id: 2, exercise: 'Cycling', duration: 45, calories: 400 },
        { id: 3, exercise: 'Swimming', duration: 60, calories: 500 },
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Workout Progress</h2>
            <ul className="space-y-2">
                {workouts.map((workout) => (
                    <li key={workout.id} className="border p-4 rounded">
                        <p><strong>Exercise:</strong> {workout.exercise}</p>
                        <p><strong>Duration:</strong> {workout.duration} minutes</p>
                        <p><strong>Calories Burned:</strong> {workout.calories}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressDashboard;
