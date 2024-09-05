import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkoutLoggingPage from './pages/WorkoutLoggingPage';
import ProgressDashboardPage from './pages/ProgressDashboardPage';
import GoalsSettingPage from './pages/GoalsSettingPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WorkoutLoggingPage />} />
                    <Route path="/progress" element={<ProgressDashboardPage />} />
                    <Route path="/goals" element={<GoalsSettingPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


