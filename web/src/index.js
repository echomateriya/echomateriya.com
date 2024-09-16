import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Import your components
import MainSite from './MainSite';
import BuilderioComponent from './BuilderioComponent';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Redirect from /builderio to the BuilderioComponent */}
                <Route path="/builderio" element={<BuilderioComponent />} />

                {/* Catch-all route or other routes */}
                <Route path="*" element={<MainSite />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
