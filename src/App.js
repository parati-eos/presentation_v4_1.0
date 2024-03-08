import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Home from './components/pages/js/home';
import Login from './components/auth/login'; // Make sure you have a Login component
import ApplicationLanding from './components/pages/js/applicationLanding';
import FormPage from './components/pages/js/form';
import PresentationCheck from './components/pages/js/presentationcheck'
import ReviewResponses from './components/pages/js/ReviewResponses';
import History from './components/pages/js/presentationhistory'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/share/:applicationId/presentation" element={<PresentationCheck />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/applicationLanding" element={<ApplicationLanding />} />
        <Route path="/Pages/presentationcheck" element={<PresentationCheck />} />
        <Route path="/Pages/ReviewResponses" element={<ReviewResponses />} />
        <Route path="/pages/presentationhistory" element={<History />} />
      </Routes>
    </Router>
  );
}
export default App;