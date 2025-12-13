import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';   // <-- MUST BE ./App.jsx

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
